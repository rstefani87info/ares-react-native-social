export const regexMap = {
  youtubeChannel: {
    id: /^(youtube|ytb|yt)([+\s\-_]*channel)?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:channel\/|user\/|c\/)([\w.-]+)\/?$/,
  },
  youtubeVideo: {
    id: /^(youtube|ytb|yt)([+\s\-_]*v(ideo)?)$/,
    pattern:
      /^(https:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/,
  },
  instagramProfile: {
    id: /insta(gram)?([+\s\-_]*profile)?/,
    pattern: /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/([\w.-]+)\/?$/,
  },
  instagramVideo: {
    id: /insta(gram)?([+\s\-_]*v(ideo))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|tv)\/([\w-]+)$/,
  },
  instagramImage: {
    id: /insta(gram)?([+\s\-_]*i(mage))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|tv)\/([\w-]+)\/media\/?$/,
  },
  facebookProfile: {
    id: /facebook([+\s\-_]*profile)?/,
    pattern: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/([\w.-]+)\/?$/,
  },
  facebookVideo: {
    id: /facebook([+\s\-_]*v(ideo))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:[^\/]+\/videos\/(?:[^\/]+\/)?|watch\/\?v=)(\d+)$/,
  },
  facebookImage: {
    id: /facebook([+\s\-_]*i(mage))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:[^\/]+\/photos\/(?:[^\/]+\/)?|photo\.php\?fbid=)(\d+)$/,
  },
  facebookMarketplaceItem: {
    id: /facebook([+\s\-_]*m(arketplace)[+\s\-_]*item)?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/marketplace\/item\/(\d+)$/,
  },
  tikTokProfile: {
    pattern: /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@([\w.-]+)\/?$/,
  },
  tikTokVideo: {
    id: /tiktok([+\s\-_]*v(ideo))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)(\d+)$/,
  },
  xProfile: {
    id: /x([+\s\-_]*profile))?/,
    pattern: /^(?:https?:\/\/)?(?:www\.)?x\.com\/@([\w.-]+)\/?$/,
  },
  xVideo: {
    id: /x([+\s\-_]*v(ideo))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?x\.com\/(?:[\w.-]+\/status\/|i\/web\/status\/)(\d+)$/,
  },
  xImage: {
    id: /x([+\s\-_]*i(mage))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?x\.com\/(?:[\w.-]+\/status\/|i\/web\/status\/)(\d+)\/photo\/(\d+)$/,
  },
  dailyMotionVideo: {
    id: /dailymotion([+\s\-_]*v(ideo))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?dailymotion\.com\/video\/([a-zA-Z0-9_-]+)$/,
  },
  pinterestProfile: {
    pattern: /^(?:https?:\/\/)?(?:www\.)?pinterest\.com\/([\w.-]+)\/?$/,
  },
  pinterestImage: {
    id: /pinterest([+\s\-_]*i(mage))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?pinterest\.com\/(?:pin\/(\d+)|[^\/]+\/(\d+))\/?$/,
  },
  pinterestVideo: {
    id: /pinterest([+\s\-_]*v(ideo))?/,
    pattern: /^(?:https?:\/\/)?(?:www\.)?pinterest\.com\/(?:pin\/(\d+))\/$/,
  },
  twitchProfile: {
    pattern: /^(?:https?:\/\/)?(?:www\.)?twitch\.tv\/([\w.-]+)\/?$/,
  },
  twitchVideo: {
    id: /twit(cher)?([+\s\-_]*v(ideo))?/,
    pattern: /^(?:https?:\/\/)?(?:www\.)?twitch\.tv\/(?:videos|clip)\/(\d+)$/,
  },
  vimeoVideo: {
    id: /vimeo([+\s\-_]*v(ideo))?/,
    pattern:
      /^(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:channels\/[\w]+\/|groups\/[\w]+\/videos\/|ondemand\/[\w]+\/|album\/[\d]+\/video\/|video\/|)(\d+)$/,
  },
};
