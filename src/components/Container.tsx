type Props = {
    className?: string;
    children: React.ReactNode;
};

export default function Container({ className = '', children }: Props) {
    return <div className={`max-w-screen-xl mx-auto px-4 ${className}`}>{children}</div>;
}
