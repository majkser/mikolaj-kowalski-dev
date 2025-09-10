'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, LogIn } from 'lucide-react';
import ShowPasswordButton from './showPasswordButton';
import { redirect } from 'next/navigation';
import { authenticate } from '@/app/actions/auth';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(formData: FormData) {
    const login = formData.get('login')?.toString();
    const password = formData.get('password')?.toString();
    // TODO: add bcrypt hashing and salting for password comparison
    // TODO: secure admin routes
    const isAuthenticated = await authenticate(login!, password!);

    if (isAuthenticated) {
      redirect('/admin');
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Login
        </Label>
        <div className="relative">
          <Input
            id="login"
            name="login"
            type="text"
            placeholder="Enter your login"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="text-sm font-medium text-foreground"
        >
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // className={`pl-10 pr-10 ${
            //   errors.password ? "border-destructive" : ""
            // }`}
            // aria-describedby={errors.password ? "password-error" : undefined}
          />
          <ShowPasswordButton
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      ></Button>
    </form>
  );
}
