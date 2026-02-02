import React, { useCallback, useEffect, useState, useRef } from 'react' 
import { useForm } from 'react-hook-form'
import appwriteService from '../../Appwrite/config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RTE from '../others/RTE'
import Input from '../others/Input'

const PostForm = ({ post }) => {
    const [imagePreview, setImagePreview] = useState(null)
    const fileInputRef = useRef(null); 

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    // ইমেজ প্রিভিউ হ্যান্ডলার
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // কাস্টম ডিভ ক্লিক করলে ইনপুট ট্রিগার হবে
    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    const submit = async (data) => {
        // data.image এবং data.image[0] আছে কি না তা নিশ্চিত হওয়া
        const fileData = data.image && data.image[0] ? data.image[0] : null;

        if (post) {
            // পোস্ট এডিট করার সময় নতুন ইমেজ আপলোড
            const file = fileData ? await appwriteService.uploadFile(fileData) : null;
            
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : post.featuredImage,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            // নতুন পোস্ট তৈরির সময় ইমেজ আপলোড
            if (fileData) {
                const file = await appwriteService.uploadFile(fileData);
                if (file) {
                    const dbPost = await appwriteService.createPost({
                        ...data,
                        featuredImage: file.$id,
                        authorId: userData.$id,
                    });
                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            } else {
                alert("Please select an image first!");
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
        }
        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue])

    // Image Register definition to avoid conflicts
    const imageRegister = register("image", { required: !post });

    return (
        <form onSubmit={handleSubmit(submit)} className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-wrap lg:flex-nowrap gap-8">
                
                {/* Left Side */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <div className="space-y-4">
                        <Input
                            label="Title :"
                            placeholder="Title"
                            className="bg-slate-900 border-slate-700 text-white"
                            {...register("title", { required: true })}
                        />

                        <Input
                            label="Slug :"
                            placeholder="Slug"
                            className="bg-slate-900 border-slate-700 text-white"
                            {...register("slug", { required: true })}
                            onInput={(e) => {
                                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                            }}
                        />
                    </div>

                    <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg">
                        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/3 space-y-6">
                    <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6 lg:sticky lg:top-10">
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Featured Image :</label>
                            
                            <div 
                                onClick={handleDivClick} 
                                className="mt-1 flex flex-col items-center justify-center px-6 py-10 border-2 border-slate-700 border-dashed rounded-xl hover:border-blue-500 hover:bg-slate-900 transition-all cursor-pointer group"
                            >
                                <svg className="h-12 w-12 text-slate-500 group-hover:text-blue-500 transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">Click to upload featured image</p>
                                <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                                
                                <input 
                                    type="file" 
                                    className="hidden" 
                                    accept="image/png, image/jpg, image/jpeg, image/gif"
                                    name={imageRegister.name}
                                    onBlur={imageRegister.onBlur}
                                    onChange={(e) => {
                                        imageRegister.onChange(e); // Hook Form এর স্টেট আপডেট করবে
                                        handleImageChange(e);      // প্রিভিউ দেখাবে
                                    }}
                                    ref={(e) => {
                                        imageRegister.ref(e);      // Hook Form এর ref
                                        fileInputRef.current = e;  // আপনার কাস্টম ক্লিক হ্যান্ডলারের ref
                                    }}
                                />
                            </div>
                        </div>

                        {/* Preview Section */}
                        {(imagePreview || (post && post.featuredImage)) && (
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 italic">Preview :</label>
                                <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900">
                                    <img
                                        src={imagePreview || appwriteService.getFilePreview(post.featuredImage)}
                                        alt="preview"
                                        className="w-full h-auto object-cover max-h-52"
                                    />
                                </div>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all transform cursor-pointer active:scale-95 shadow-lg ${post ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
                        >
                            {post ? "Update Story" : "Publish Story"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PostForm;