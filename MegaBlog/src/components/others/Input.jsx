import React, { forwardRef, useId } from 'react';

const Input = forwardRef(({
    label,
    type = 'text',
    className = '',
    icon,
    ...props
}, ref) => {
    const id = useId();
    
    return (
        <div className="space-y-2 w-full text-left">
            {label && (
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor={id}>
                    {label}
                </label>
            )}
            <div className="relative group">
                {icon && (
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 group-focus-within:text-[#2563eb] transition-colors">
                        <span className="material-symbols-outlined text-lg">{icon}</span>
                    </span>
                )}
                <input
                    type={type}
                    className={`block w-full ${icon ? 'pl-11' : 'pl-4'} pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563eb] transition-all outline-none text-slate-900 dark:text-slate-100 ${className}`}
                    ref={ref}
                    {...props}
                    id={id}
                />
            </div>
        </div>
    );
});

export default Input;