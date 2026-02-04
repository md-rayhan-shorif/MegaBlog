import conf from "../conf/conf";
import {Client, ID, Databases, Query, Storage} from 'appwrite'

export class AppwriteService {

    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, authorId }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    authorId ,
                    likes: [],
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage , }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    async toggleLike(slug, userId, currentLikedArray = []){
        try {
            const isLiked = currentLikedArray.includes(userId)
            const updatedLikes = isLiked ? currentLikedArray.filter( (id)=> id !== userId ) : [...currentLikedArray, userId];

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug,
                {
                    likes: updatedLikes
                }
            );
        } catch (error) {
             console.log("Appwrite service :: toggleLike :: error", error);
            return null;
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
             console.log("Appwrite service :: uploadFile :: error", error)
            return false;
        }
    }


    // একদম এভাবে লিখুন
getFilePreview(fileId) {
    try {
        if (!fileId) return "";
        return this.storage.getFileView(
            conf.appwriteBucketId,
            fileId
        ); // এখানে .href দিতে পারেন অথবা সরাসরি অবজেক্টও কাজ করে রিঅ্যাক্টে
    } catch (error) {
        console.log("Appwrite service :: getFilePreview :: error", error);
        return "";
    }
}
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug,
            )
        } catch (error) {
             console.log("Appwrite service :: getPost :: error", error)
            return false;
        }
    }

    async getPosts(queries = [Query.limit(100)]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
              console.log("Appwrite service :: deleteFile :: error", error)
            return false;
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug

            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false;
        }
    }






};

const appwriteService = new AppwriteService()
export default appwriteService