export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo',
  apiKey: process.env.CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'fireescape-toys',
};

export function buildCloudinaryUrl(publicId: string, transformations?: string): string {
  const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/`;
  const url = transformations ? 
    `${baseUrl}${transformations}/${publicId}` : 
    `${baseUrl}${publicId}`;
  return url;
}

export const imageTransformations = {
  thumbnail: 'w_300,h_200,c_fill,q_auto,f_auto',
  medium: 'w_600,h_400,c_fill,q_auto,f_auto',
  large: 'w_1200,h_800,c_fill,q_auto,f_auto',
  hero: 'w_1920,h_1080,c_fill,q_auto,f_auto',
};