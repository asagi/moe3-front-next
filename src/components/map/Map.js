import { GetServerSideProps } from 'next';
import styles from '@/styles/map.module.scss';
import SvgResources from './resources.svg';
import { initialData } from './initialData';

const provincesOfSea = initialData.sea.map((prov, index) => {
  return <use xlinkHref={'#' + prov.code} className={styles.sea} key={index} />;
});

const provincesOfLand = initialData.land.map((prov, index) => {
  const className = (() => {
    if (prov.owner === 'a') return styles.austrian_province;
    if (prov.owner === 'e') return styles.english_province;
    if (prov.owner === 'f') return styles.french_province;
    if (prov.owner === 'g') return styles.german_province;
    if (prov.owner === 'i') return styles.italian_province;
    if (prov.owner === 'r') return styles.russian_province;
    if (prov.owner === 't') return styles.turkish_province;
    return styles.free_province;
  })();
  return <use xlinkHref={'#' + prov.code} className={className} key={index} />;
});

/**
 * Map Component.
 *
 * @returns {?} component
 */
export default function Map() {
  return (
    <>
      <SvgResources className='hidden' />
      <div className='map'>
        {/* Map base */}
        <svg>
          <use xlinkHref='#map_base'></use>
        </svg>

        <svg>
          {provincesOfSea}
          {provincesOfLand}
        </svg>

        {/* map frame */}
        <svg className={styles.frame}>
          <use xlinkHref='#map_frame'></use>
        </svg>
      </div>

      <div className='army austria'>
        <svg>
          <use xlinkHref='#army'></use>
        </svg>
      </div>
    </>
  );
}
