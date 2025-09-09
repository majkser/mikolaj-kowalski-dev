import { Button } from '../ui/button';
import { Eye, EyeOff } from 'lucide-react';

export default function ShowPasswordButton({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
      onClick={() => setShowPassword(!showPassword)}
      aria-label={showPassword ? 'Hide password' : 'Show password'}
    >
      {showPassword ? (
        <EyeOff className="h-4 w-4 text-muted-foreground" />
      ) : (
        <Eye className="h-4 w-4 text-muted-foreground" />
      )}
    </Button>
  );
}
