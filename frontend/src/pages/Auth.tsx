import { useState } from 'react';
import { useNavigate } from 'react-router';
import type { SubmitEvent } from 'react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { LockIcon, MailIcon, UserIcon } from 'lucide-react';
const Auth = ({ mode = 'login' }: { mode: 'login' | 'register' }) => {

    const isRegister = mode === 'register';
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const updateField = (key: string, value: string) =>
        setForm((prev) => ({ ...prev, [key]: value }));

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className='min-h-screen text-zinc-900 flex flex-col md:flex-row'>
            {/* Left panel */}
            <div className='md:w-1/2 p-8 md:p-12 lg:p-16 bg-linear-to-br from-orange-50 via-zinc-100 to-red-50 border-b md:border-b-0 md:border-r border-zinc-200 flex flex-col justify-between relative overflow-hidden'>
                <div className='absolute inset-0 bg-[url("/pattern.svg")]'></div>
                <div className='relative z-10 flex items-center gap-3'>
                    <img
                        src='/logo.png'
                        alt='Logo'
                        className='max-h-16 w-auto'
                    />
                    <span className='text-4xl font-medium uppercase text-zinc-900'>
                        DriveStash
                    </span>
                </div>
                <div className='relative z-10 my-12 space-y-6'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl tracking-tight text-zinc-900 leading-tight'>
                        Secure, Simple and Fast <br />{' '}
                        <span className='text-orange-600'>Cloud Storage</span>
                    </h2>
                    <p className='text-sm md:text-base text-zinc-600 max-w-md leading-relaxed'>
                        Store your files securely in out drive, organize into
                        folder, share with permissions and access from anywhere
                    </p>
                </div>

                <div className='relative z-10 text-sm text-zinc-500'>
                    &copy; 2026 JohnWebDev. All Rights Reserved
                </div>
            </div>
            {/* Auth form */}
            <div className='md:w-1/2 p-8 md:p-12 lg:p-16 flex items-center justify-center bg-white'>
                <div className='w-full max-w-md space-y-6 animate-fade-in'>
                    <div>
                        <h3 className='text-2xl font-medium text-zinc-900'>
                            {isRegister ? 'Create an account' : 'Welcome Back'}
                        </h3>
                        <p className='text-sm text-zinc-500 mt-1'>
                            {isRegister
                                ? 'Enter your details to get started with 1GB free storage'
                                : 'Enter your credentials'}
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='space-y-4'>
                        {isRegister && (
                            <Input
                                label='Name'
                                type='text'
                                icon={UserIcon}
                                placeholder='Enter your name'
                                value={form.name}
                                onChange={(e) =>
                                    updateField('name', e.target.value)
                                }
                            />
                        )}
                        <Input
                            label='Email'
                            type='email'
                            icon={MailIcon}
                            placeholder='Enter your email'
                            value={form.email}
                            onChange={(e) =>
                                updateField('email', e.target.value)
                            }
                        />
                        <Input
                            label='Password'
                            type='password'
                            icon={LockIcon}
                            placeholder='Enter your password'
                            value={form.password}
                            onChange={(e) =>
                                updateField('password', e.target.value)
                            }
                        />
                        <Button
                            type='submit'
                            variant='primary'
                            className='w-full py-3'
                            isLoading={isLoading}
                        >
                            <span className='text-base font-medium'>
                                {isRegister ? 'Sign Up' : 'Login'}
                            </span>
                        </Button>
                    </form>

                    <div className='p-2 text-center'>
                        {isRegister ? (
                            <p className='text-sm text-zinc-500'>
                                Already have an account?{' '}
                                <span
                                    className='text-orange-600 font-medium cursor-pointer'
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </span>
                            </p>
                        ) : (
                            <p className='text-sm text-zinc-500'>
                                Don't have an account?{' '}
                                <span
                                    className='text-orange-600 font-medium cursor-pointer'
                                    onClick={() => navigate('/register')}
                                >
                                    Sign Up
                                </span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Auth;
