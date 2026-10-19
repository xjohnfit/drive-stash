import { Loader2Icon } from "lucide-react";

const sizes = {
    sm: "size-4",
    md: "size-6",
    lg: "size-10",
};

type SpinnerProps = {
    size?: keyof typeof sizes;
    className?: string;
};

export function Spinner({ size = "md", className = "text-orange-500" }: SpinnerProps) {
    return <Loader2Icon className={`animate-spin ${sizes[size]} ${className}`} />;
}
