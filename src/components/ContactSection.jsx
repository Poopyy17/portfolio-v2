import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Feel free to fill up your details, I will reach out to you asap
            </h2>
          </div>{' '}
          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <form className="space-y-6">
              <div>
                <label className="text-sm text-gray-400 block mb-3">
                  Email Address
                </label>
                <Input
                  placeholder="john@example.com"
                  type="email"
                  className="bg-gray-800 border-gray-700 text-white h-12"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-3">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project or just say hello..."
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 resize-none min-h-[120px]"
                  rows={5}
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
