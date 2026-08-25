'use client';

/* eslint-disable @next/next/no-img-element -- static-exported scene art needs direct, instant crossfades */

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from 'react';

const assetPath = '/babylon';

const invitations = [
  'Join the community',
  'Imagine a garden',
  'Nominate the land',
  'Offer what you know',
  'Carry the story',
];

const atlas = [
  {
    place: 'Spring beneath the blossoms',
    idea: 'A garden made for being together',
    tag: 'goodvibe',
    image: `${assetPath}/babylon-goodvibe.png`,
    alt: 'A wide spring garden beneath pink flowering trees, with a winding stream, lawns, sculpture, flower beds, and people relaxing together',
  },
  {
    place: 'A courtyard for lingering',
    idea: 'Rooms that open into the garden',
    image: `${assetPath}/babylon-gorgeous-courtyard.jpg`,
    alt: 'A tranquil garden courtyard with shaded seating, blue tile, fountains, reflecting pools, palms, and abundant flowers',
  },
  {
    place: 'A quiet threshold',
    idea: 'Water that slows you down',
    image: `${assetPath}/babylon-courtyard-v2.jpg`,
    alt: 'A flower-filled Babylon courtyard with a long lily pond, fountain, palms, and people gathering',
  },
  {
    place: 'A place to wander',
    idea: 'Courtyards open to everyone',
    image: `${assetPath}/babylon-courtyard.jpg`,
    alt: 'A sunlit Babylon courtyard with blue columns, fountains, lily ponds, palms, and visitors',
  },
  {
    place: 'A study in shade',
    idea: 'Four ways to rest beneath the trees',
    image: `${assetPath}/babylon-courtyard-study.jpg`,
    alt: 'Four views of peaceful garden rooms with shaded seating, winding paths, palms, flowers, and warm sunset light',
  },
  {
    place: 'A hill above the flowers',
    idea: 'A garden with room to do nothing',
    image: `${assetPath}/babylon-garden-chillin.jpg`,
    alt: 'A visitor resting on a grassy hillside above a vast flower garden, winding paths, waterfalls, and green mountains',
  },
  {
    place: 'A path beside the water',
    idea: 'A quiet place to choose where next',
    image: `${assetPath}/babylon-lakeside-pause.jpg`,
    alt: 'A visitor sitting beneath a leafy tree beside a winding stone path, flower beds, and a peaceful garden lake',
  },
  {
    place: 'A path through green',
    idea: 'The long way is the point',
    image: `${assetPath}/babylon-garden-path.jpg`,
    alt: 'A stone path curving beside a stream through dense tropical foliage, palms, and bright flowers',
  },
  {
    place: 'A stream under palms',
    idea: 'Cool water through the living garden',
    image: `${assetPath}/babylon-tropical-stream.jpg`,
    alt: 'Stepping stones crossing a clear tropical stream surrounded by palms, ferns, mossy rocks, and flowers',
  },
  {
    place: 'Through a tropical threshold',
    idea: 'Every arch should promise another garden',
    image: `${assetPath}/babylon-tropical-threshold.webp`,
    alt: 'A stone path passing through a vine-covered arch in a lush tropical garden filled with large green leaves and red flowers',
  },
  {
    place: 'A woodland commons',
    idea: 'A garden made for long afternoons together',
    image: `${assetPath}/babylon-woodland-commons.webp`,
    alt: 'Families gathering at picnic tables beneath flowering woodland trees beside a rustic stone arch',
  },
  {
    place: 'A Central American garden path',
    idea: 'Follow the shade deeper into green',
    image: `${assetPath}/babylon-central-american-path.webp`,
    alt: 'A winding stone path through dense Central American tropical planting with palms, red flowers, and colorful foliage',
  },
  {
    place: 'A Nordic garden above the water',
    idea: 'Stone, birch, flowers and the long northern light',
    image: `${assetPath}/babylon-nordic-garden.webp`,
    alt: 'A Nordic garden with a stone path, birch trees, soft pink and purple flowers, and a view across water toward green mountains',
  },
];

const journeyStops = [
  { id: 'imagine', label: 'Imagine' },
  { id: 'wonder', label: 'Wonder' },
  { id: 'breathe', label: 'Breathe' },
  { id: 'atlas', label: 'Atlas' },
  { id: 'promise', label: 'Promise' },
  { id: 'begin', label: 'Begin' },
];

const entryPlants = [
  { name: 'cherry-blossom', layer: 'far', image: `${assetPath}/parallax-cherry-blossom.webp` },
  { name: 'wisteria', layer: 'far', image: `${assetPath}/parallax-wisteria.webp` },
  { name: 'ivy', layer: 'mid', image: `${assetPath}/parallax-ivy.webp` },
  { name: 'rose', layer: 'mid', image: `${assetPath}/parallax-rose.webp` },
  { name: 'hollyhock', layer: 'mid', image: `${assetPath}/parallax-hollyhock.webp` },
  { name: 'hydrangea', layer: 'near', image: `${assetPath}/parallax-hydrangea.webp` },
  { name: 'lavender', layer: 'near', image: `${assetPath}/parallax-lavender.webp` },
  { name: 'rosemary', layer: 'near', image: `${assetPath}/parallax-rosemary.webp` },
  { name: 'peony', layer: 'near', image: `${assetPath}/parallax-peony.webp` },
  { name: 'boxwood', layer: 'near', image: `${assetPath}/parallax-boxwood.webp` },
];

const clampScene = (value: number) =>
  Math.max(0, Math.min(journeyStops.length - 1, value));

export default function Home() {
  const [scene, setScene] = useState(0);
  const [atlasIndex, setAtlasIndex] = useState(0);
  const lastWheel = useRef(0);
  const touchStart = useRef<number | null>(null);

  const goTo = useCallback((nextScene: number) => {
    setScene(clampScene(nextScene));
  }, []);

  const go = useCallback(
    (direction: number) => {
      setScene((current) => clampScene(current + direction));
    },
    [],
  );

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const index = journeyStops.findIndex((stop) => stop.id === hash);
    if (index < 0) return;
    const frame = window.requestAnimationFrame(() => setScene(index));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const id = journeyStops[scene].id;
    window.history.replaceState(null, '', `#${id}`);
  }, [scene]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('[data-no-advance]') || Math.abs(event.deltaY) < 18) return;
      const now = Date.now();
      if (now - lastWheel.current < 850) return;
      lastWheel.current = now;
      go(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches('input, textarea, select')) return;
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        go(1);
      }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        go(-1);
      }
      if (event.key === 'Home') goTo(0);
      if (event.key === 'End') goTo(journeyStops.length - 1);
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [go, goTo]);

  const sceneClass = (index: number) => {
    if (index === scene) return 'journey-scene is-active';
    if (index < scene) return 'journey-scene is-behind';
    return 'journey-scene is-ahead';
  };

  const advanceFromScene = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('button, a, [data-no-advance]')) return;
    go(1);
  };

  const updatePointerParallax = (event: PointerEvent<HTMLElement>) => {
    const x = event.clientX / event.currentTarget.clientWidth - 0.5;
    const y = event.clientY / event.currentTarget.clientHeight - 0.5;
    const style = event.currentTarget.style;
    style.setProperty('--parallax-far-x', `${x * -8}px`);
    style.setProperty('--parallax-far-y', `${y * -5}px`);
    style.setProperty('--parallax-mid-x', `${x * -16}px`);
    style.setProperty('--parallax-mid-y', `${y * -10}px`);
    style.setProperty('--parallax-near-x', `${x * -28}px`);
    style.setProperty('--parallax-near-y', `${y * -18}px`);
  };

  const resetPointerParallax = (event: PointerEvent<HTMLElement>) => {
    const style = event.currentTarget.style;
    for (const property of [
      '--parallax-far-x',
      '--parallax-far-y',
      '--parallax-mid-x',
      '--parallax-mid-y',
      '--parallax-near-x',
      '--parallax-near-y',
    ]) {
      style.setProperty(property, '0px');
    }
  };

  const currentAtlas = atlas[atlasIndex];

  return (
    <main
      className="journey"
      onPointerMove={updatePointerParallax}
      onPointerLeave={resetPointerParallax}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientY ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const difference = touchStart.current - event.changedTouches[0].clientY;
        if (Math.abs(difference) > 48) go(difference > 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <nav className="journey-nav" aria-label="Babylon journey">
        <button className="journey-brand" onClick={() => goTo(0)} aria-label="Return to the beginning">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>BABYLON</span>
        </button>
        <div className="journey-stops" aria-label="Garden rooms">
          {journeyStops.map((stop, index) => (
            <button
              className={index === scene ? 'is-current' : ''}
              onClick={() => goTo(index)}
              key={stop.id}
              aria-current={index === scene ? 'step' : undefined}
            >
              {stop.label}
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => goTo(5)}>Take part</button>
      </nav>

      <section
        className={sceneClass(0)}
        aria-hidden={scene !== 0}
        inert={scene !== 0}
        onClick={advanceFromScene}
      >
        <img
          className="scene-image"
          src={`${assetPath}/babylon-goodvibe.png`}
          alt="A wide spring garden beneath pink flowering trees, with a winding stream, lawns, sculpture, flower beds, and people relaxing together"
        />
        <div className="scene-shade scene-shade-deep" />
        <div className="scene-copy scene-copy-center opening-copy">
          <p className="eyebrow">A WORLD WONDER, IMAGINED BY THE WORLD</p>
          <h1>First, imagine<br /><em>Babylon.</em></h1>
          <p className="lead">
            One hundred acres of water, trees, architecture, peace and wonder—
            created by the world, for the world.
          </p>
          <div className="scene-actions">
            <button className="button button-sun" onClick={() => go(1)}>
              Enter the garden <span aria-hidden="true">→</span>
            </button>
            <button className="button button-glass" onClick={() => goTo(5)}>
              Donate $1 to help make it happen
            </button>
          </div>
          <p className="free-note"><span aria-hidden="true">✦</span> The core gardens will always be free to everyone.</p>
        </div>
        <p className="click-whisper">Click anywhere to walk in</p>
      </section>

      <section
        className={sceneClass(1)}
        aria-hidden={scene !== 1}
        inert={scene !== 1}
        onClick={advanceFromScene}
      >
        <img
          className="scene-image"
          src={`${assetPath}/babylon-gorgeous-courtyard.jpg`}
          alt="A tranquil garden courtyard with fountains, reflecting pools, palms, and flowers"
        />
        <div className="scene-shade scene-shade-left" />
        <div className="scene-copy scene-copy-left">
          <p className="eyebrow">THE QUESTION</p>
          <h2>Why don’t we have<br />this wonder today?</h2>
          <p className="why-not">Why couldn’t we?</p>
          <div className="possibility">
            <strong>1%</strong>
            <span>If even 1% of humanity donated <b>$1</b>,<br />we could build it together.</span>
          </div>
        </div>
      </section>

      <section
        className={sceneClass(2)}
        aria-hidden={scene !== 2}
        inert={scene !== 2}
        onClick={advanceFromScene}
      >
        <img
          className="scene-image"
          src={`${assetPath}/babylon-garden-chillin.jpg`}
          alt="A visitor resting on a grassy hillside above a vast flower garden and waterfalls"
        />
        <div className="scene-shade scene-shade-right" />
        <div className="scene-copy scene-copy-right">
          <p className="eyebrow">A MODERN HANGING GARDEN</p>
          <h2>A place the world<br />can breathe in.</h2>
          <p className="lead">
            Not a monument to one person, one nation, or one moment. A living place
            of shade and water, wildness and architecture, open to everyone.
          </p>
          <p className="quiet-line">Warm sun. Cool water. Happy voices.</p>
        </div>
      </section>

      <section
        className={`${sceneClass(3)} atlas-scene`}
        aria-hidden={scene !== 3}
        inert={scene !== 3}
        data-no-advance
      >
        <img className="scene-image atlas-main-image" src={currentAtlas.image} alt={currentAtlas.alt} />
        <div className="scene-shade scene-shade-atlas" />
        <div className="atlas-title">
          <p className="eyebrow">THE ATLAS OF BABYLON</p>
          <h2>A garden imagined<br />from everywhere.</h2>
        </div>
        <div className="atlas-caption" aria-live="polite">
          <div className="atlas-meta">
            <span>{String(atlasIndex + 1).padStart(2, '0')} / {String(atlas.length).padStart(2, '0')}</span>
            {currentAtlas.tag && <b>#{currentAtlas.tag}</b>}
          </div>
          <p>{currentAtlas.place}</p>
          <h3>{currentAtlas.idea}</h3>
        </div>
        <div className="atlas-strip" role="group" aria-label="Choose a garden vision">
          {atlas.map((item, index) => (
            <button
              key={item.place}
              className={index === atlasIndex ? 'is-selected' : ''}
              onClick={() => setAtlasIndex(index)}
              aria-label={`Show ${item.place}`}
              aria-pressed={index === atlasIndex}
            >
              <img src={item.image} alt="" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </section>

      <section
        className={sceneClass(4)}
        aria-hidden={scene !== 4}
        inert={scene !== 4}
        onClick={advanceFromScene}
      >
        <img
          className="scene-image"
          src={`${assetPath}/babylon-tropical-stream.jpg`}
          alt="Stepping stones crossing a clear stream surrounded by palms, ferns, and flowers"
        />
        <div className="scene-shade scene-shade-left" />
        <div className="scene-copy scene-copy-left promise-copy">
          <p className="eyebrow">THE PROMISE</p>
          <h2>Free. Open.<br />Tended forever.</h2>
          <p className="lead">
            Babylon must be as beautiful in its stewardship as it is in its gardens.
            Funding, decisions and progress will be visible from the beginning.
          </p>
          <div className="principle-grid">
            <span><b>Free at its heart</b>The core garden remains open to everyone.</span>
            <span><b>Built in the open</b>Clear governance, costs and progress.</span>
            <span><b>Rooted in place</b>Water-wise, resilient and ecologically true.</span>
            <span><b>Made by many</b>No one person or country owns the wonder.</span>
          </div>
        </div>
      </section>

      <section
        className={sceneClass(5)}
        aria-hidden={scene !== 5}
        inert={scene !== 5}
        onClick={advanceFromScene}
      >
        <img
          className="scene-image"
          src={`${assetPath}/babylon-courtyard-v2.jpg`}
          alt="A sunlit Babylon courtyard with a lily pond, fountain, palms, and people gathering"
        />
        <div className="scene-shade scene-shade-deep" />
        <div className="scene-copy scene-copy-center final-copy">
          <p className="eyebrow">PHASE ONE · BUILD THE MOVEMENT</p>
          <h2>The first structure<br />is this invitation.</h2>
          <p className="lead">Babylon begins wherever someone says: I want this to exist.</p>
          <div className="invitation-chips">
            {invitations.map((invitation, index) => (
              <span key={invitation}><b>{String(index + 1).padStart(2, '0')}</b>{invitation}</span>
            ))}
          </div>
          <div className="scene-actions">
            <a
              className="button button-sun"
              href="https://github.com/amyleesterling/babylon"
              target="_blank"
              rel="noreferrer"
            >
              Follow the beginning <span aria-hidden="true">↗</span>
            </a>
            <button className="button button-glass" onClick={() => goTo(0)}>Walk through again</button>
          </div>
          <p className="donate-line">Donate $1 to help make it happen. No sign-in to explore Babylon.</p>
        </div>
      </section>

      <div
        className={`entry-parallax ${scene === 0 ? 'is-present' : 'is-departed'}`}
        aria-hidden="true"
      >
        {entryPlants.map((plant) => (
          <span
            className={`parallax-piece plant-${plant.name} depth-${plant.layer}`}
            key={plant.name}
          >
            <img src={plant.image} alt="" draggable="false" />
          </span>
        ))}
      </div>

      <div className="journey-controls" aria-label="Journey controls">
        <button onClick={() => go(-1)} disabled={scene === 0} aria-label="Previous garden room">←</button>
        <span>{journeyStops[scene].label}</span>
        <button onClick={() => go(1)} disabled={scene === journeyStops.length - 1} aria-label="Next garden room">→</button>
      </div>
      <div className="scene-count" aria-hidden="true">
        <b>{String(scene + 1).padStart(2, '0')}</b>
        <span />
        {String(journeyStops.length).padStart(2, '0')}
      </div>
      <p className="sr-only" aria-live="polite">
        Garden room {scene + 1} of {journeyStops.length}: {journeyStops[scene].label}
      </p>
    </main>
  );
}
