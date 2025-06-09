
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function JameyBoost() {
  return (
    <div className="p-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-8">🚀 Welcome to JameyBoost</h1>

      <Tabs defaultValue="hashtags" className="max-w-4xl mx-auto">
        <TabsList className="flex justify-center mb-6">
          <TabsTrigger value="hashtags">Trending Hashtags</TabsTrigger>
          <TabsTrigger value="sounds">Trending Sounds</TabsTrigger>
          <TabsTrigger value="titles">Viral Titles</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="hashtags">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">🔍 Find Real-Time Hashtags</h2>
              <Input placeholder="Enter your niche or keyword..." className="mb-3" />
              <Button>Generate Hashtags</Button>
              <p className="mt-4 text-sm text-gray-300">*Shows top 10 currently trending hashtags*</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sounds">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">🎵 Trending TikTok Sounds</h2>
              <p className="text-sm">This section will display daily-updated audio tracks popular on TikTok.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="titles">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">📢 Viral Titles & Topics</h2>
              <p className="text-sm">Get real-time popular video titles and inspiration to boost engagement.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">💬 Sentiment Analysis</h2>
              <Input placeholder="Paste your TikTok video link..." className="mb-3" />
              <Button>Analyze Comments</Button>
              <p className="mt-4 text-sm text-gray-300">*This tool analyzes audience reactions in comments*</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
