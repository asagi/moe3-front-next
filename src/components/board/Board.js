import styles from '@/styles/board.module.scss';
import SvgResources from './resources.svg';
import { initialData } from './initialData';

const getOwnerStyleForTarget = (owner, target) => {
  if (owner === 'a') return styles[`austrian-${target}`];
  if (owner === 'e') return styles[`english-${target}`];
  if (owner === 'f') return styles[`french-${target}`];
  if (owner === 'g') return styles[`german-${target}`];
  if (owner === 'i') return styles[`italian-${target}`];
  if (owner === 'r') return styles[`russian-${target}`];
  if (owner === 't') return styles[`turkish-${target}`];
  return styles[`free-${target}`];
};

const provincesOfSea = initialData.seas.map((prov, index) => {
  return <use xlinkHref={`#${prov.code}`} className={styles.sea} key={index} />;
});

const supplyCenters = initialData.units.map((unit, index) => {
  const prov = unit.code.split('_');
  const ownerStyle = getOwnerStyleForTarget(unit.owner, 'supply-center');
  const positionStyle = styles[`supply-center-on-${prov[0]}`];
  return (
    <svg className={`${ownerStyle} ${positionStyle}`} key={`svg-${index}`}>
      <use xlinkHref='#supply-center' key={index} />
    </svg>
  );
});

const loadLands = (data) => {
  return data.lands.map((prov, index) => {
    const ownerStyle = getOwnerStyleForTarget(prov.owner, 'province');
    return <use xlinkHref={`#${prov.code}`} className={ownerStyle} key={index} />;
  });
};

const loadUnits = (data) => {
  return data.units.map((unit, index) => {
    const unitKind = ((kind) => {
      if (kind === 'a') return 'army';
      if (kind === 'f') return 'fleet';
      return null;
    })(unit.kind);
    if (!unitKind) return;
    const prov = unit.code.split('_');
    const ownerStyle = getOwnerStyleForTarget(unit.owner, 'unit');
    const positionStyle = styles[`unit-on-${prov[0]}`];
    return (
      <svg className={`${ownerStyle} ${positionStyle}`} key={`svg-${index}`}>
        <use xlinkHref={`#${unitKind}`} key={`unit-${index}`} />
      </svg>
    );
  });
};

const loadAnchors = (data) => {
  return data.units.map((unit, index) => {
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
};

/**
 * @param {object} props pate properties
 * @param {object} props.boardData information of units and provinces
 * @returns {?} component
 */
export default function Board({ boardData }) {
  const lands = loadLands(boardData || initialData);
  const units = loadUnits(boardData || initialData);
  const anchors = loadAnchors(boardData || initialData);

  return (
    <>
      <SvgResources className='hidden' />
      <div className='board'>
        {/* board base */}
        <svg className={styles.base}>
          <use xlinkHref='#board-base'></use>
        </svg>

        {/* provinces */}
        <svg className={styles.province}>
          {provincesOfSea}
          {lands}
        </svg>

        {/* supply centers */}
        <div className='supply-centers'>{supplyCenters}</div>

        {/* board frame */}
        <svg className={styles.frame}>
          <use xlinkHref='#board-frame'></use>
        </svg>

        {/* units */}
        <div className='units'>
          {units}
          {anchors}
        </div>
      </div>
    </>
  );
}
