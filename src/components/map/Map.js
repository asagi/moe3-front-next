import styles from '@/styles/map.module.scss';
import SvgResources from './resources.svg';
import { initialData } from './initialData';

const provincesOfSea = initialData.sea.map((prov, index) => {
  return <use xlinkHref={`#${prov.code}`} className={styles.sea} key={index} />;
});

const getStyle = (owner, target) => {
  if (owner === 'a') return styles[`austrian-${target}`];
  if (owner === 'e') return styles[`english-${target}`];
  if (owner === 'f') return styles[`french-${target}`];
  if (owner === 'g') return styles[`german-${target}`];
  if (owner === 'i') return styles[`italian-${target}`];
  if (owner === 'r') return styles[`russian-${target}`];
  if (owner === 't') return styles[`turkish-${target}`];
  return styles[`free-${target}`];
};

const provincesOfLand = initialData.land.map((prov, index) => {
  const ownerStyle = getStyle(prov.owner, 'province');
  return <use xlinkHref={`#${prov.code}`} className={ownerStyle} key={index} />;
});

const supplyCenters = initialData.initialUnit.map((unit, index) => {
  const prov = unit.code.split('_');
  const ownerStyle = getStyle(unit.owner, 'supply-center');
  const positionStyle = styles[`supply-center-on-${prov[0]}`];
  return (
    <svg className={`${ownerStyle} ${positionStyle}`} key={`svg-${index}`}>
      <use xlinkHref='#supply-center' key={index} />
    </svg>
  );
});

const units = initialData.initialUnit.map((unit, index) => {
  const unitKind = ((kind) => {
    if (kind === 'a') return 'army';
    if (kind === 'f') return 'fleet';
    return null;
  })(unit.kind);
  if (!unitKind) return;
  const prov = unit.code.split('_');
  const ownerStyle = getStyle(unit.owner, 'unit');
  const positionStyle = styles[`unit-on-${prov[0]}`];
  return (
    <svg className={`${ownerStyle} ${positionStyle}`} key={`svg-${index}`}>
      <use xlinkHref={`#${unitKind}`} key={`unit-${index}`} />
    </svg>
  );
});

const anchors = initialData.initialUnit.map((unit, index) => {
  const prov = unit.code.split('_');
  const positionStyle = styles[`anchor-on-${prov[0]}${prov[1] || ''}`];
  return (
    prov[1] && (
      <svg className={positionStyle} key={`svg-${index}`}>
        <use xlinkHref='#anchor' key={`anchor-${index}`} />
      </svg>
    )
  );
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
        <svg className={styles.base}>
          <use xlinkHref='#map-base'></use>
        </svg>

        <svg className={styles.province}>
          {provincesOfSea}
          {provincesOfLand}
        </svg>

        {/* supply center */}
        <div className='supply-centers'>{supplyCenters}</div>

        {/* map frame */}
        <svg className={styles.frame}>
          <use xlinkHref='#map-frame'></use>
        </svg>

        {/* units */}
        <div className='units'>
          {units}
          {anchors}
        </div>
      </div>

      <div className='army austria'>
        <svg>
          <use xlinkHref='#army'></use>
        </svg>
      </div>
    </>
  );
}
