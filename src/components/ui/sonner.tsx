import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="top-right"
      expand={false}
      richColors
      closeButton={false}
      toastOptions={{
        style: {
          background: 'rgba(17, 24, 39, 0.95)', // gray-900 with opacity
          border: '1px solid rgba(75, 85, 99, 0.5)', // gray-600 with opacity
          borderRadius: '12px',
          color: '#f9fafb', // gray-50
          backdropFilter: 'blur(8px)',
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
          fontSize: '14px',
          fontWeight: '500',
          padding: '16px',
          minHeight: '60px',
        },
        className: 'toast-custom',
      }}
      style={
        {
          '--normal-bg': 'rgba(17, 24, 39, 0.95)',
          '--normal-text': '#f9fafb',
          '--normal-border': 'rgba(75, 85, 99, 0.5)',
          '--success-bg': 'rgba(34, 197, 94, 0.1)',
          '--success-border': 'rgba(34, 197, 94, 0.3)',
          '--success-text': '#22c55e',
          '--error-bg': 'rgba(239, 68, 68, 0.1)',
          '--error-border': 'rgba(239, 68, 68, 0.3)',
          '--error-text': '#ef4444',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
