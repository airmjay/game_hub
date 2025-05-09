import no_image from '../assets/img/no-image.png';
export default function (image: string | undefined) 
{  if(image == null) return no_image
   const media = 'media/';
   const index = image.indexOf(media) + media.length;
   return image.slice(0, index) + 'crop/600/400/' + image.slice(index);
   
}