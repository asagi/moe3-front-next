import styles from '@/styles/map.module.scss';
import SvgResources from '@/resources/resources.svg';

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

        {/* Provinces sea*/}
        <svg>
          <use xlinkHref='#nao' className={styles.sea}></use>
          <use xlinkHref='#nwg' className={styles.sea}></use>
          <use xlinkHref='#bar' className={styles.sea}></use>
          <use xlinkHref='#nth' className={styles.sea}></use>
          <use xlinkHref='#ska' className={styles.sea}></use>
          <use xlinkHref='#iri' className={styles.sea}></use>
          <use xlinkHref='#bot' className={styles.sea}></use>
          <use xlinkHref='#hel' className={styles.sea}></use>
          <use xlinkHref='#bal' className={styles.sea}></use>
          <use xlinkHref='#eng' className={styles.sea}></use>
          <use xlinkHref='#mao' className={styles.sea}></use>
          <use xlinkHref='#lyo' className={styles.sea}></use>
          <use xlinkHref='#tys' className={styles.sea}></use>
          <use xlinkHref='#adr' className={styles.sea}></use>
          <use xlinkHref='#wes' className={styles.sea}></use>
          <use xlinkHref='#bla' className={styles.sea}></use>
          <use xlinkHref='#aeg' className={styles.sea}></use>
          <use xlinkHref='#ion' className={styles.sea}></use>
          <use xlinkHref='#eas' className={styles.sea}></use>
          <use xlinkHref='#cly' className={styles.province_free}></use>
          <use xlinkHref='#edi' className={styles.province_free}></use>
          <use xlinkHref='#lvn' className={styles.province_free}></use>
          <use xlinkHref='#yor' className={styles.province_free}></use>
          <use xlinkHref='#wal' className={styles.province_free}></use>
          <use xlinkHref='#lon' className={styles.province_free}></use>
          <use xlinkHref='#bre' className={styles.province_free}></use>
          <use xlinkHref='#pic' className={styles.province_free}></use>
          <use xlinkHref='#par' className={styles.province_free}></use>
          <use xlinkHref='#bur' className={styles.province_free}></use>
          <use xlinkHref='#gas' className={styles.province_free}></use>
          <use xlinkHref='#mar' className={styles.province_free}></use>
          <use xlinkHref='#kie' className={styles.province_free}></use>
          <use xlinkHref='#ber' className={styles.province_free}></use>
          <use xlinkHref='#pru' className={styles.province_free}></use>
          <use xlinkHref='#ruh' className={styles.province_free}></use>
          <use xlinkHref='#mun' className={styles.province_free}></use>
          <use xlinkHref='#sil' className={styles.province_free}></use>
          <use xlinkHref='#pie' className={styles.province_free}></use>
          <use xlinkHref='#ven' className={styles.province_free}></use>
          <use xlinkHref='#tus' className={styles.province_free}></use>
          <use xlinkHref='#rom' className={styles.province_free}></use>
          <use xlinkHref='#apu' className={styles.province_free}></use>
          <use xlinkHref='#nap' className={styles.province_free}></use>
          <use xlinkHref='#tyr' className={styles.province_free}></use>
          <use xlinkHref='#boh' className={styles.province_free}></use>
          <use xlinkHref='#gal' className={styles.province_free}></use>
          <use xlinkHref='#vie' className={styles.province_free}></use>
          <use xlinkHref='#tri' className={styles.province_free}></use>
          <use xlinkHref='#bud' className={styles.province_free}></use>
          <use xlinkHref='#fin' className={styles.province_free}></use>
          <use xlinkHref='#stp' className={styles.province_free}></use>
          <use xlinkHref='#liv' className={styles.province_free}></use>
          <use xlinkHref='#war' className={styles.province_free}></use>
          <use xlinkHref='#mos' className={styles.province_free}></use>
          <use xlinkHref='#ukr' className={styles.province_free}></use>
          <use xlinkHref='#sev' className={styles.province_free}></use>
          <use xlinkHref='#con' className={styles.province_free}></use>
          <use xlinkHref='#ank' className={styles.province_free}></use>
          <use xlinkHref='#smy' className={styles.province_free}></use>
          <use xlinkHref='#arm' className={styles.province_free}></use>
          <use xlinkHref='#syr' className={styles.province_free}></use>
          <use xlinkHref='#nwy' className={styles.province_free}></use>
          <use xlinkHref='#swe' className={styles.province_free}></use>
          <use xlinkHref='#den' className={styles.province_free}></use>
          <use xlinkHref='#hol' className={styles.province_free}></use>
          <use xlinkHref='#bel' className={styles.province_free}></use>
          <use xlinkHref='#spa' className={styles.province_free}></use>
          <use xlinkHref='#por' className={styles.province_free}></use>
          <use xlinkHref='#naf' className={styles.province_free}></use>
          <use xlinkHref='#tun' className={styles.province_free}></use>
          <use xlinkHref='#alb' className={styles.province_free}></use>
          <use xlinkHref='#ser' className={styles.province_free}></use>
          <use xlinkHref='#gre' className={styles.province_free}></use>
          <use xlinkHref='#rum' className={styles.province_free}></use>
          <use xlinkHref='#bul' className={styles.province_free}></use>
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
