import Image from 'next/image';
import Link from 'next/link';
import { slug } from '../lib/data';
import { cityImages } from '../lib/images';
export function CityCard({name, country, index}:{name:string;country:string;index:number}) {
  const image = cityImages[name];
  return <Link className={'city-card'+(image ? ' city-card-photo' : '')} href={'/cities/'+slug(name)}>
    {image && <Image src={image.src} alt="" fill sizes="(max-width: 767px) 50vw, 285px" className="city-photo" />}
    <span className="city-shade" aria-hidden="true" />
    <span className="city-label">{String(index + 1).padStart(2, '0')} / {country}</span>
    <div className="city-copy"><h3>{name}</h3><b>Explore city ↗</b></div>
  </Link>;
}
