import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Users, TrendingUp } from "lucide-react";

const discussions = [
  { id: 1, author: "Anitha K.", avatar: "🙋‍♀️", title: "How I started selling pickles from home – my journey", replies: 34, likes: 89, tag: "Success Story", time: "2 hours ago" },
  { id: 2, author: "Meera S.", avatar: "👩‍🍳", title: "Best packaging ideas for homemade food items?", replies: 21, likes: 45, tag: "Tips & Help", time: "5 hours ago" },
  { id: 3, author: "Fatima B.", avatar: "👩‍🎨", title: "Anyone interested in a group workshop for mehendi art?", replies: 18, likes: 56, tag: "Workshop", time: "1 day ago" },
  { id: 4, author: "Lakshmi R.", avatar: "👩‍🏫", title: "Free resources for learning spoken English", replies: 42, likes: 120, tag: "Learning", time: "1 day ago" },
  { id: 5, author: "Sunita D.", avatar: "✂️", title: "Tailoring pricing guide – don't undersell your work!", replies: 55, likes: 156, tag: "Tips & Help", time: "2 days ago" },
  { id: 6, author: "Kavitha P.", avatar: "🎨", title: "My first craft fair experience – what I learned", replies: 27, likes: 78, tag: "Success Story", time: "3 days ago" },
];

const stats = [
  { icon: Users, label: "Members", value: "2,500+" },
  { icon: MessageCircle, label: "Discussions", value: "850+" },
  { icon: TrendingUp, label: "Skills Shared", value: "150+" },
];

const tagColors: Record<string, string> = {
  "Success Story": "bg-green-100 text-green-800",
  "Tips & Help": "bg-blue-100 text-blue-800",
  "Workshop": "bg-purple-100 text-purple-800",
  "Learning": "bg-amber-100 text-amber-800",
};

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              <Users className="inline h-8 w-8 mr-2 text-primary" />
              Community
            </h1>
            <p className="mt-3 text-muted-foreground font-body max-w-lg mx-auto">
              Connect, share experiences, ask for help, and grow together with women like you.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border-border/50">
                <CardContent className="p-4">
                  <stat.icon className="h-6 w-6 mx-auto text-primary mb-1" />
                  <p className="font-heading font-bold text-xl text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* New post */}
          <div className="max-w-2xl mx-auto mb-8">
            <Button variant="hero" className="w-full">
              <MessageCircle className="mr-2 h-4 w-4" /> Start a New Discussion
            </Button>
          </div>

          {/* Discussions */}
          <div className="max-w-2xl mx-auto space-y-4">
            {discussions.map((post) => (
              <Card key={post.id} className="border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{post.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-heading font-semibold text-sm text-foreground">{post.author}</span>
                        <span className="text-xs text-muted-foreground">· {post.time}</span>
                        <Badge className={`text-xs ${tagColors[post.tag] || "bg-accent text-accent-foreground"}`}>
                          {post.tag}
                        </Badge>
                      </div>
                      <h3 className="font-body text-foreground mt-1 leading-snug">{post.title}</h3>
                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3.5 w-3.5" /> {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3.5 w-3.5" /> {post.replies} replies
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Community;
