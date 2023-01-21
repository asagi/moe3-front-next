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
          <use xlinkHref='#cly' className={styles.free_province}></use>
          <use xlinkHref='#edi' className={styles.free_province}></use>
          <use xlinkHref='#lvn' className={styles.free_province}></use>
          <use xlinkHref='#yor' className={styles.free_province}></use>
          <use xlinkHref='#wal' className={styles.free_province}></use>
          <use xlinkHref='#lon' className={styles.free_province}></use>
          <use xlinkHref='#bre' className={styles.free_province}></use>
          <use xlinkHref='#pic' className={styles.free_province}></use>
          <use xlinkHref='#par' className={styles.free_province}></use>
          <use xlinkHref='#bur' className={styles.free_province}></use>
          <use xlinkHref='#gas' className={styles.free_province}></use>
          <use xlinkHref='#mar' className={styles.free_province}></use>
          <use xlinkHref='#kie' className={styles.free_province}></use>
          <use xlinkHref='#ber' className={styles.free_province}></use>
          <use xlinkHref='#pru' className={styles.free_province}></use>
          <use xlinkHref='#ruh' className={styles.free_province}></use>
          <use xlinkHref='#mun' className={styles.free_province}></use>
          <use xlinkHref='#sil' className={styles.free_province}></use>
          <use xlinkHref='#pie' className={styles.free_province}></use>
          <use xlinkHref='#ven' className={styles.free_province}></use>
          <use xlinkHref='#tus' className={styles.free_province}></use>
          <use xlinkHref='#rom' className={styles.free_province}></use>
          <use xlinkHref='#apu' className={styles.free_province}></use>
          <use xlinkHref='#nap' className={styles.free_province}></use>
          <use xlinkHref='#tyr' className={styles.free_province}></use>
          <use xlinkHref='#boh' className={styles.free_province}></use>
          <use xlinkHref='#gal' className={styles.free_province}></use>
          <use xlinkHref='#vie' className={styles.free_province}></use>
          <use xlinkHref='#tri' className={styles.free_province}></use>
          <use xlinkHref='#bud' className={styles.free_province}></use>
          <use xlinkHref='#fin' className={styles.free_province}></use>
          <use xlinkHref='#stp' className={styles.free_province}></use>
          <use xlinkHref='#liv' className={styles.free_province}></use>
          <use xlinkHref='#war' className={styles.free_province}></use>
          <use xlinkHref='#mos' className={styles.free_province}></use>
          <use xlinkHref='#ukr' className={styles.free_province}></use>
          <use xlinkHref='#sev' className={styles.free_province}></use>
          <use xlinkHref='#con' className={styles.free_province}></use>
          <use xlinkHref='#ank' className={styles.free_province}></use>
          <use xlinkHref='#smy' className={styles.free_province}></use>
          <use xlinkHref='#arm' className={styles.free_province}></use>
          <use xlinkHref='#syr' className={styles.free_province}></use>
          <use xlinkHref='#nwy' className={styles.free_province}></use>
          <use xlinkHref='#swe' className={styles.free_province}></use>
          <use xlinkHref='#den' className={styles.free_province}></use>
          <use xlinkHref='#hol' className={styles.free_province}></use>
          <use xlinkHref='#bel' className={styles.free_province}></use>
          <use xlinkHref='#spa' className={styles.free_province}></use>
          <use xlinkHref='#por' className={styles.free_province}></use>
          <use xlinkHref='#naf' className={styles.free_province}></use>
          <use xlinkHref='#tun' className={styles.free_province}></use>
          <use xlinkHref='#alb' className={styles.free_province}></use>
          <use xlinkHref='#ser' className={styles.free_province}></use>
          <use xlinkHref='#gre' className={styles.free_province}></use>
          <use xlinkHref='#rum' className={styles.free_province}></use>
          <use xlinkHref='#bul' className={styles.free_province}></use>
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
