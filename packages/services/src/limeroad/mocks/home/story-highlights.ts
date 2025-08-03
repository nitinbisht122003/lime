import type { StoryHighlightsDto } from "@app/types/limeroad";

export const storyHighlights: StoryHighlightsDto = {
  story_groups: [
    {
      id: "1",
      thumbnail: "https://randomuser.me/api/portraits/men/32.jpg",
      label: "Vacation",
      seen: false,
      stories: [
        {
          id: "s1",
          user_id: "user1",
          user_name: "John Doe",
          user_avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3",
            duration: 2000
          },
          timestamp: Date.now() - 3600000, // 1 hour ago
          seen: false
        },
        {
          id: "s2",
          user_id: "user1",
          user_name: "John Doe",
          user_avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          media: {
            type: "image",
            url: "https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71"
          },
          timestamp: Date.now() - 1800000, // 30 minutes ago
          seen: false
        }
      ]
    },
    {
      id: "2",
      thumbnail: "https://randomuser.me/api/portraits/men/32.jpg",
      label: "Trends",
      seen: false,
      stories: [
        {
          id: "s1",
          user_id: "user1",
          user_name: "John Doe",
          user_avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
            duration: 8000
          },
          timestamp: Date.now() - 3600000, // 1 hour ago
          seen: false
        },
        {
          id: "s2",
          user_id: "user1",
          user_name: "John Doe",
          user_avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          media: {
            type: "image",
            url: "https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71"
          },
          timestamp: Date.now() - 1800000, // 30 minutes ago
          seen: false
        }
      ]
    },
    {
      id: "3",
      thumbnail: "https://randomuser.me/api/portraits/men/32.jpg",
      label: "What's New",
      seen: true,
      stories: [
        {
          id: "s1",
          user_id: "user1",
          user_name: "John Doe",
          user_avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1745977561659-56a67855b2ce",
            duration: 4000
          },
          timestamp: Date.now() - 3600000, // 1 hour ago
          seen: false
        },
        {
          id: "s2",
          user_id: "user1",
          user_name: "John Doe",
          user_avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          media: {
            type: "image",
            url: "https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71"
          },
          timestamp: Date.now() - 1800000, // 30 minutes ago
          seen: false
        }
      ]
    }
    // More story groups...
  ]
};
