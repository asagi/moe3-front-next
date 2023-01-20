import styles from '@/styles/map.module.scss';

/**
 * Map Component.
 *
 * @returns {?} component
 */
export default function Map() {
  return (
    <>
      <div className='map'>
        {/* Map base */}
        <svg>
          <use xlinkHref='#resources_svg__map_base'></use>
        </svg>

        {/* Provinces sea*/}
        <svg id='nao' className={styles.sea}>
          <use xlinkHref='#resources_svg__nao'></use>
        </svg>
        <svg id='nao' className={styles.sea}>
          <use xlinkHref='#resources_svg__nao'></use>
        </svg>
        <svg id='nwg' className={styles.sea}>
          <use xlinkHref='#resources_svg__nwg'></use>
        </svg>
        <svg id='bar' className={styles.sea}>
          <use xlinkHref='#resources_svg__bar'></use>
        </svg>
        <svg id='nth' className={styles.sea}>
          <use xlinkHref='#resources_svg__nth'></use>
        </svg>
        <svg id='ska' className={styles.sea}>
          <use xlinkHref='#resources_svg__ska'></use>
        </svg>
        <svg id='iri' className={styles.sea}>
          <use xlinkHref='#resources_svg__iri'></use>
        </svg>
        <svg id='bot' className={styles.sea}>
          <use xlinkHref='#resources_svg__bot'></use>
        </svg>
        <svg id='hel' className={styles.sea}>
          <use xlinkHref='#resources_svg__hel'></use>
        </svg>
        <svg id='bal' className={styles.sea}>
          <use xlinkHref='#resources_svg__bal'></use>
        </svg>
        <svg id='eng' className={styles.sea}>
          <use xlinkHref='#resources_svg__eng'></use>
        </svg>
        <svg id='mao' className={styles.sea}>
          <use xlinkHref='#resources_svg__mao'></use>
        </svg>
        <svg id='lyo' className={styles.sea}>
          <use xlinkHref='#resources_svg__lyo'></use>
        </svg>
        <svg id='tys' className={styles.sea}>
          <use xlinkHref='#resources_svg__tys'></use>
        </svg>
        <svg id='adr' className={styles.sea}>
          <use xlinkHref='#resources_svg__adr'></use>
        </svg>
        <svg id='wes' className={styles.sea}>
          <use xlinkHref='#resources_svg__wes'></use>
        </svg>
        <svg id='bla' className={styles.sea}>
          <use xlinkHref='#resources_svg__bla'></use>
        </svg>
        <svg id='aeg' className={styles.sea}>
          <use xlinkHref='#resources_svg__aeg'></use>
        </svg>
        <svg id='ion' className={styles.sea}>
          <use xlinkHref='#resources_svg__ion'></use>
        </svg>
        <svg id='eas' className={styles.sea}>
          <use xlinkHref='#resources_svg__eas'></use>
        </svg>
        <svg id='cly' className={styles.english_land}>
          <use xlinkHref='#resources_svg__cly'></use>
        </svg>
        <svg id='edi' className={styles.english_land}>
          <use xlinkHref='#resources_svg__edi'></use>
        </svg>
        <svg id='lvn' className={styles.english_land}>
          <use xlinkHref='#resources_svg__lvn'></use>
        </svg>
        <svg id='yor' className={styles.english_land}>
          <use xlinkHref='#resources_svg__yor'></use>
        </svg>
        <svg id='wal' className={styles.english_land}>
          <use xlinkHref='#resources_svg__wal'></use>
        </svg>
        <svg id='lon' className={styles.english_land}>
          <use xlinkHref='#resources_svg__lon'></use>
        </svg>
        <svg id='bre' className={styles.french_land}>
          <use xlinkHref='#resources_svg__bre'></use>
        </svg>
        <svg id='pic' className={styles.french_land}>
          <use xlinkHref='#resources_svg__pic'></use>
        </svg>
        <svg id='par' className={styles.french_land}>
          <use xlinkHref='#resources_svg__par'></use>
        </svg>
        <svg id='bur' className={styles.french_land}>
          <use xlinkHref='#resources_svg__bur'></use>
        </svg>
        <svg id='gas' className={styles.french_land}>
          <use xlinkHref='#resources_svg__gas'></use>
        </svg>
        <svg id='mar' className={styles.french_land}>
          <use xlinkHref='#resources_svg__mar'></use>
        </svg>
        <svg id='kie' className={styles.german_land}>
          <use xlinkHref='#resources_svg__kie'></use>
        </svg>
        <svg id='ber' className={styles.german_land}>
          <use xlinkHref='#resources_svg__ber'></use>
        </svg>
        <svg id='pru' className={styles.german_land}>
          <use xlinkHref='#resources_svg__pru'></use>
        </svg>
        <svg id='ruh' className={styles.german_land}>
          <use xlinkHref='#resources_svg__ruh'></use>
        </svg>
        <svg id='mun' className={styles.german_land}>
          <use xlinkHref='#resources_svg__mun'></use>
        </svg>
        <svg id='sil' className={styles.german_land}>
          <use xlinkHref='#resources_svg__sil'></use>
        </svg>
        <svg id='pie' className={styles.italian_land}>
          <use xlinkHref='#resources_svg__pie'></use>
        </svg>
        <svg id='ven' className={styles.italian_land}>
          <use xlinkHref='#resources_svg__ven'></use>
        </svg>
        <svg id='tus' className={styles.italian_land}>
          <use xlinkHref='#resources_svg__tus'></use>
        </svg>
        <svg id='rom' className={styles.italian_land}>
          <use xlinkHref='#resources_svg__rom'></use>
        </svg>
        <svg id='apu' className={styles.italian_land}>
          <use xlinkHref='#resources_svg__apu'></use>
        </svg>
        <svg id='nap' className={styles.italian_land}>
          <use xlinkHref='#resources_svg__nap'></use>
        </svg>
        <svg id='tyr' className={styles.austrian_land}>
          <use xlinkHref='#resources_svg__tyr'></use>
        </svg>
        <svg id='boh' className={styles.austrian_land}>
          <use xlinkHref='#resources_svg__boh'></use>
        </svg>
        <svg id='gal' className={styles.austrian_land}>
          <use xlinkHref='#resources_svg__gal'></use>
        </svg>
        <svg id='vie' className={styles.austrian_land}>
          <use xlinkHref='#resources_svg__vie'></use>
        </svg>
        <svg id='tri' className={styles.austrian_land}>
          <use xlinkHref='#resources_svg__tri'></use>
        </svg>
        <svg id='bud' className={styles.austrian_land}>
          <use xlinkHref='#resources_svg__bud'></use>
        </svg>
        <svg id='fin' className={styles.russian_land}>
          <use xlinkHref='#resources_svg__fin'></use>
        </svg>
        <svg id='stp' className={styles.russian_land}>
          <use xlinkHref='#resources_svg__stp'></use>
        </svg>
        <svg id='liv' className={styles.russian_land}>
          <use xlinkHref='#resources_svg__liv'></use>
        </svg>
        <svg id='war' className={styles.russian_land}>
          <use xlinkHref='#resources_svg__war'></use>
        </svg>
        <svg id='mos' className={styles.russian_land}>
          <use xlinkHref='#resources_svg__mos'></use>
        </svg>
        <svg id='ukr' className={styles.russian_land}>
          <use xlinkHref='#resources_svg__ukr'></use>
        </svg>
        <svg id='sev' className={styles.russian_land}>
          <use xlinkHref='#resources_svg__sev'></use>
        </svg>
        <svg id='con' className={styles.turkish_land}>
          <use xlinkHref='#resources_svg__con'></use>
        </svg>
        <svg id='ank' className={styles.turkish_land}>
          <use xlinkHref='#resources_svg__ank'></use>
        </svg>
        <svg id='smy' className={styles.turkish_land}>
          <use xlinkHref='#resources_svg__smy'></use>
        </svg>
        <svg id='arm' className={styles.turkish_land}>
          <use xlinkHref='#resources_svg__arm'></use>
        </svg>
        <svg id='syr' className={styles.turkish_land}>
          <use xlinkHref='#resources_svg__syr'></use>
        </svg>
        <svg id='nwy' className={styles.free_land}>
          <use xlinkHref='#resources_svg__nwy'></use>
        </svg>
        <svg id='swe' className={styles.free_land}>
          <use xlinkHref='#resources_svg__swe'></use>
        </svg>
        <svg id='den' className={styles.free_land}>
          <use xlinkHref='#resources_svg__den'></use>
        </svg>
        <svg id='hol' className={styles.free_land}>
          <use xlinkHref='#resources_svg__hol'></use>
        </svg>
        <svg id='bel' className={styles.free_land}>
          <use xlinkHref='#resources_svg__bel'></use>
        </svg>
        <svg id='spa' className={styles.free_land}>
          <use xlinkHref='#resources_svg__spa'></use>
        </svg>
        <svg id='por' className={styles.free_land}>
          <use xlinkHref='#resources_svg__por'></use>
        </svg>
        <svg id='naf' className={styles.free_land}>
          <use xlinkHref='#resources_svg__naf'></use>
        </svg>
        <svg id='tun' className={styles.free_land}>
          <use xlinkHref='#resources_svg__tun'></use>
        </svg>
        <svg id='alb' className={styles.free_land}>
          <use xlinkHref='#resources_svg__alb'></use>
        </svg>
        <svg id='ser' className={styles.free_land}>
          <use xlinkHref='#resources_svg__ser'></use>
        </svg>
        <svg id='gre' className={styles.free_land}>
          <use xlinkHref='#resources_svg__gre'></use>
        </svg>
        <svg id='rum' className={styles.free_land}>
          <use xlinkHref='#resources_svg__rum'></use>
        </svg>
        <svg id='bul' className={styles.free_land}>
          <use xlinkHref='#resources_svg__bul'></use>
        </svg>

        {/* map frame */}
        <svg>
          <use xlinkHref='#resources_svg__map_frame'></use>
        </svg>
      </div>

      <div className='army austria'>
        <svg>
          <use xlinkHref='#resources_svg__army'></use>
        </svg>
      </div>
    </>
  );
  _land;
}
