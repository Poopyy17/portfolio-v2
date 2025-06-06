import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, ArrowUpRight, Mail, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

export default function MenuFooter({ socialLinks }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        'https://formsubmit.co/james.boac25@gmail.com',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
        });
        e.target.reset(); // Reset form fields
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error(
        'Failed to send message. Please try again or contact me directly.',
        {
          duration: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 pt-8 border-t border-gray-800 mt-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {' '}
      <motion.div variants={itemVariants}>
        <h3 className="text-gray-400 mb-4">Follow me at my socials:</h3>
        <div className="flex flex-wrap gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          ))}{' '}
        </div>{' '}
        <div className="mt-8">
          <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 hover:bg-gray-800/50 transition-colors group">
            <p className="text-gray-400 text-sm uppercase tracking-wide font-medium mb-3">
              Direct contact
            </p>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-md group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-white font-medium">james.boac25@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>{' '}
      <motion.div variants={itemVariants}>
        <h3 className="text-gray-400 mb-6">Stay connected with me</h3>{' '}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Hidden FormSubmit fields */}
          <input
            type="hidden"
            name="_subject"
            value="New Menu Contact Form Submission"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <div>
            <Input
              name="email"
              type="email"
              required
              disabled={isSubmitting}
              placeholder="Enter your email"
              className="bg-gray-800/20 border border-gray-700 rounded-lg px-3 py-2 focus:border-blue-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-gray-600 transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <Textarea
              name="message"
              required
              disabled={isSubmitting}
              placeholder="Your message..."
              className="bg-gray-800/20 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 resize-none focus:border-blue-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-gray-600 transition-colors min-h-[100px] disabled:opacity-50"
              rows={4}
            />
          </div>{' '}
          <div className="flex justify-end mt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="ghost"
              className="rounded-full border border-gray-700 hover:bg-gray-800 hover:text-white px-4 py-2 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
