/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ============================================================================
 * 🎵 Baldgirl - MUSICIAN WEBSITE TEMPLATE CONFIGURATION
 * ============================================================================
 * 
 * Welcome! This single file controls almost everything on your musician website.
 * When you upload this project to GitHub or deploy to Vercel/Netlify, simply edit
 * the values below to swap out your name, bio, photos, socials, and music!
 */

import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // --------------------------------------------------------------------------
  // 1. BRAND & IDENTITY (Easy to swap out!)
  // --------------------------------------------------------------------------
  name: "Baldgirl | Official Site",
  artistName: "Baldgirl",
  showDevTools: false, // Set to true if you want the floating "Customize Template" & "GitHub Guide" buttons visible
  tagline: "",
  genre: "Electronic",
  location: "Los Angeles / London",
  bio: "Blending analog synthesizers with hypnotic vocals and cinematic beats, Baldgirl creates nocturnal soundtracks for dreamers and night drives.",
  fullBio: "Formed in late 2023 between Los Angeles and London, Baldgirl has quickly garnered a devoted cult following across TikTok and streaming platforms. With a signature sound that bridges 80s synth-wave nostalgia and hyper-modern indie electronic production, Baldgirl's debut EP 'Midnight Mirage' amassed over 4 million organic streams in its first six months. Now preparing for an upcoming international festival run and exclusive merchandise collection, Baldgirl continues to push the boundaries of immersive audiovisual storytelling.",

  // --------------------------------------------------------------------------
  // 2. VISUALS & IMAGERY (Swap with your own Unsplash or local image URLs!)
  // --------------------------------------------------------------------------
  heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85", // Atmospheric concert lighting / stage vibe
  heroVideoUrl: "/Baldgirl-MV.mp4", // Atmospheric looping hero background video
  profileImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=85", // Artist silhouette with microphone / studio
  
  galleryImages: [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      caption: "Live at Neon Horizon Festival, 2025",
      aspect: "landscape"
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      caption: "Analog synth sessions at Studio A, London",
      aspect: "portrait"
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80",
      caption: "Midnight Mirage EP release party",
      aspect: "landscape"
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      caption: "Backstage moments before the London headline show",
      aspect: "square"
    }
  ],

  // --------------------------------------------------------------------------
  // 3. THEME & COLOR PALETTE
  // Choose: 'dark-velvet', 'midnight-cyber', 'warm-indie', 'neon-synth', or 'clean-acoustic'
  // --------------------------------------------------------------------------
  theme: "dark-velvet",
  accentColor: "#a855f7", // Purple / Violet glow

  // --------------------------------------------------------------------------
  // 4. SOCIAL & STREAMING LINKS (Add or edit your links here)
  // --------------------------------------------------------------------------
  socials: [
    {
      id: "soc-instagram",
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/thatbaldgirl00?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      followers: "142K Followers"
    },
    {
      id: "soc-tiktok",
      platform: "tiktok",
      label: "TikTok",
      url: "https://www.tiktok.com/@thatbaldgirl00?is_from_webapp=1&sender_device=pc",
      followers: "380K Followers"
    },
    {
      id: "soc-youtube",
      platform: "youtube",
      label: "YouTube",
      url: "https://youtube.com/@baldgirl-w9u?si=3TMeUn2_hh158BmS",
      followers: "89K Subscribers"
    },
    {
      id: "soc-spotify",
      platform: "spotify",
      label: "Spotify",
      url: "https://open.spotify.com/artist/3rwJKHwCcLgdW7jIwrROU3?si=5vmOqbq4QoaxFm1vb7mESQ",
      isStreaming: true,
      followers: "650K Monthly Listeners"
    },
    {
      id: "soc-apple",
      platform: "apple-music",
      label: "Apple Music",
      url: "https://music.apple.com/us/artist/baldgirl/6777200242",
      isStreaming: true
    }
  ],

  // --------------------------------------------------------------------------
  // 5. TABS CONTENT & STATUS
  // --------------------------------------------------------------------------
  tabs: {
    // ---- MUSIC TAB ----
    music: {
      enabled: true,
      featuredReleaseId: "rel-clubover",
      releases: [
        {
          id: "rel-clubover",
          title: "Clubover",
          type: "Single",
          releaseDate: "2026 / 07 / 18",
          coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/93/b2/cf/93b2cf9c-0fa5-1e18-3d2b-d02197789146/881392567186-copy-0e95b339.png/1000x1000bb.jpg",
          description: "The latest single by Baldgirl, featuring hypnotic analog synths and signature dance rhythms.",
          spotifyUrl: "https://open.spotify.com/artist/3rwJKHwCcLgdW7jIwrROU3?si=5vmOqbq4QoaxFm1vb7mESQ",
          appleMusicUrl: "https://music.apple.com/us/album/clubover-single/6791424557",
          tracks: [
            { id: "trk-co-1", title: "Clubover", duration: "3:15", isFeatured: true }
          ]
        },
        {
          id: "rel-swag",
          title: "$WAG",
          type: "Single",
          releaseDate: "2026 / 07 / 07",
          coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bd/85/2b/bd852b0e-64ff-37db-1c86-d07cc13ef03a/881392235771-copy-159e1db1.png/1000x1000bb.jpg",
          description: "An energetic release packed with hard-hitting basslines and electronic vocal hooks.",
          spotifyUrl: "https://open.spotify.com/artist/3rwJKHwCcLgdW7jIwrROU3?si=5vmOqbq4QoaxFm1vb7mESQ",
          appleMusicUrl: "https://music.apple.com/us/album/%24wag-single/6784724257",
          tracks: [
            { id: "trk-sw-1", title: "$WAG", duration: "3:02", isFeatured: true },
            { id: "trk-sw-2", title: "$WAG (Extended Mix)", duration: "4:18", isFeatured: false }
          ]
        },
        {
          id: "rel-club-baldie",
          title: "club baldie",
          type: "EP",
          releaseDate: "2026 / 06 / 27",
          coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/28/f7/05/28f70551-da3a-5826-5321-6be08c7d9c65/881392217395-copy-39c6598c.png/1000x1000bb.jpg",
          description: "4-track EP featuring 'Good Day', 'Uptown', 'Y0', and 'Zazzed'.",
          spotifyUrl: "https://open.spotify.com/artist/3rwJKHwCcLgdW7jIwrROU3?si=5vmOqbq4QoaxFm1vb7mESQ",
          appleMusicUrl: "https://music.apple.com/us/album/club-baldie-ep/6784375646",
          tracks: [
            { id: "trk-cb-1", title: "Good Day", duration: "1:33", isFeatured: true },
            { id: "trk-cb-2", title: "Uptown", duration: "3:01", isFeatured: true },
            { id: "trk-cb-3", title: "Y0", duration: "1:30", isFeatured: false },
            { id: "trk-cb-4", title: "Zazzed", duration: "2:06", isFeatured: true }
          ]
        },
        {
          id: "rel-arcane",
          title: "Arcane (feat. Kitsi)",
          type: "Single",
          releaseDate: "2026 / 06 / 13",
          coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6c/de/58/6cde5817-e8fe-3e47-12ce-f30df7d93751/881392408519-copy-92c3372a.png/1000x1000bb.jpg",
          description: "A collaborative atmospheric single featuring Kitsi.",
          spotifyUrl: "https://open.spotify.com/artist/3rwJKHwCcLgdW7jIwrROU3?si=5vmOqbq4QoaxFm1vb7mESQ",
          appleMusicUrl: "https://music.apple.com/us/album/arcane-feat-kitsi-single/6788554792",
          tracks: [
            { id: "trk-ar-1", title: "Arcane (feat. Kitsi)", duration: "2:01", isFeatured: true }
          ]
        }
      ]
    },

    // ---- VIDEOS TAB ----
    videos: {
      enabled: true,
      featuredVideoId: "vid-0",
      items: [
        {
          id: "vid-0",
          title: "Clubover (official bootleg video)",
          type: "Music Video",
          thumbnail: "https://i.ytimg.com/vi/jDIORfQvuC4/hqdefault.jpg",
          youtubeId: "jDIORfQvuC4",
          duration: "3:15",
          views: "Official Bootleg Video",
          date: "July 2026",
          featured: true
        },
        {
          id: "vid-1",
          title: "$WAG",
          type: "Music Video",
          thumbnail: "https://i.ytimg.com/vi/P05UZEffsJA/hqdefault.jpg",
          youtubeId: "P05UZEffsJA",
          duration: "3:02",
          views: "Official Music Video",
          date: "July 2026"
        },
        {
          id: "vid-2",
          title: "Zazzed",
          type: "Music Video",
          thumbnail: "https://i.ytimg.com/vi/u9SXUOakGDc/hqdefault.jpg",
          youtubeId: "u9SXUOakGDc",
          duration: "2:06",
          views: "Official Music Video",
          date: "June 2026"
        },
        {
          id: "vid-3",
          title: "Sh@ke",
          type: "Music Video",
          thumbnail: "https://i.ytimg.com/vi/eP3W2vciHbc/hqdefault.jpg",
          youtubeId: "eP3W2vciHbc",
          duration: "2:45",
          views: "Official Music Video",
          date: "June 2026"
        },
        {
          id: "vid-4",
          title: "Uptown",
          type: "Music Video",
          thumbnail: "https://i.ytimg.com/vi/ccdDoqkNMb0/hqdefault.jpg",
          youtubeId: "ccdDoqkNMb0",
          duration: "2:50",
          views: "Official Music Video",
          date: "May 2026"
        }
      ]
    },

    // ---- LIVE TAB (Set to 'coming_soon' as requested!) ----
    live: {
      enabled: true,
      status: "coming_soon",
      comingSoonTitle: "WORLD TOUR 2026 / 2027",
      comingSoonSubtitle: "We are currently locking in venue dates across North America, UK, and Europe. Join the VIP Tour Waitlist to get exclusive early ticket access before general public release.",
      expectedYear: "Autumn 2026",
      shows: [
        { id: "sh-1", date: "OCT 14, 2026", venue: "The El Rey Theatre", city: "Los Angeles, CA", country: "USA", status: "Coming Soon" },
        { id: "sh-2", date: "OCT 22, 2026", venue: "Webster Hall", city: "New York, NY", country: "USA", status: "Coming Soon" },
        { id: "sh-3", date: "NOV 05, 2026", venue: "O2 Forum Kentish Town", city: "London", country: "UK", status: "Coming Soon" },
        { id: "sh-4", date: "NOV 12, 2026", venue: "Le Trianon", city: "Paris", country: "France", status: "Coming Soon" },
        { id: "sh-5", date: "NOV 18, 2026", venue: "Paradiso", city: "Amsterdam", country: "Netherlands", status: "Coming Soon" }
      ]
    },

    // ---- SHOP TAB (Set to 'coming_soon' as requested!) ----
    shop: {
      enabled: true,
      status: "coming_soon",
      comingSoonTitle: "OFFICIAL MERCHANDISE DROP",
      comingSoonSubtitle: "Our new limited-edition capsule collection featuring heavyweight organic hoodies, custom vinyl pressings, and tour tees is currently in production. Sign up for first access.",
      dropDateText: "Dropping Next Month",
      previewItems: [
        {
          id: "merch-1",
          name: "Midnight Mirage — Limited Edition 12\" Translucent Purple Vinyl",
          category: "Vinyl",
          price: 35,
          image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=800&q=80",
          tag: "Limited Edition",
          description: "180g colored vinyl pressed in gatefold jacket with exclusive lyric booklet and digital download card."
        },
        {
          id: "merch-2",
          name: "Baldgirl Heavyweight 'Neon Horizon' Hoodie",
          category: "Apparel",
          price: 65,
          image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
          tag: "Pre-order",
          description: "450gsm heavyweight cotton hoodie with puff-print chest logo and custom back graphic."
        },
        {
          id: "merch-3",
          name: "Analog Heartbreak Tour Tee",
          category: "Apparel",
          price: 30,
          image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
          tag: "New",
          description: "Vintage-washed 100% organic cotton tee with distressed front print."
        },
        {
          id: "merch-4",
          name: "Synthwave Enamel Pin & Sticker Pack",
          category: "Accessories",
          price: 15,
          image: "https://images.unsplash.com/photo-1589384267710-7a170981ca78?auto=format&fit=crop&w=800&q=80",
          description: "Set of 3 custom soft-enamel pins and holographic die-cut vinyl stickers."
        }
      ]
    },

    // ---- CONTACT TAB ----
    contact: {
      enabled: true,
      managementEmail: "baldgirl087@gmail.com",
      bookingEmail: "baldgirl087@gmail.com",
      pressKitUrl: "https://example.com/baldgirl-epk.pdf",
      recordLabel: "Independent / Dreamwave Records"
    }
  }
};
