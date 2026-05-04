'use client'

import { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { artworkSeries, type Artwork, type ArtworkSeries } from '@/lib/data'

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="13 4 7 10 13 16" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="7 4 13 10 7 16" />
    </svg>
  )
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Close"
      className="font-sans text-[20px] leading-none font-light text-ds-grey hover:text-black transition-colors"
    >
      ✕
    </button>
  )
}

function ArtworkDetail({
  artwork,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  artwork: Artwork
  series: ArtworkSeries
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  return (
    <div className="flex h-full">
      {/* Large image area */}
      <div className="flex-1 min-w-0">
        <div
          className="w-full h-full"
          style={{ background: artwork.gradient }}
        />
      </div>

      {/* Right panel: close + artwork info */}
      <div className="w-40 lg:w-56 flex-shrink-0 flex flex-col items-end px-4 py-6">
        <CloseButton onClick={onClose} />

        <div className="flex-1" />

        <div className="flex items-end gap-3">
          <div className="text-right">
            {/* Body Bold — Montserrat 16px 700 */}
            <p className="font-sans font-bold text-ds-body leading-snug text-black">
              {artwork.title}, {artwork.year}
            </p>
            {/* Caption Regular — Montserrat 12px 400 */}
            <p className="font-sans font-normal text-ds-caption text-ds-grey mt-0.5">
              {artwork.medium}
            </p>
            <p className="font-sans font-normal text-ds-caption text-ds-grey">
              {artwork.dimensions}
            </p>
          </div>

          <div className="flex gap-1 text-ds-grey">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="disabled:opacity-20 hover:text-black transition-colors"
              aria-label="Previous artwork"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="disabled:opacity-20 hover:text-black transition-colors"
              aria-label="Next artwork"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArtworkPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const seriesId = searchParams.get('series') || 'dissolving-blur'
  const artworkId = searchParams.get('id')

  const currentSeries = artworkSeries.find((s) => s.id === seriesId) ?? artworkSeries[0]
  const selectedIndex = artworkId
    ? currentSeries.artworks.findIndex((a) => a.id === artworkId)
    : -1
  const selectedArtwork = selectedIndex >= 0 ? currentSeries.artworks[selectedIndex] : null

  const openArtwork = (id: string) => {
    router.push(`/artwork?series=${seriesId}&id=${id}`, { scroll: false })
  }

  const closeArtwork = () => {
    router.push(`/artwork?series=${seriesId}`, { scroll: false })
  }

  const prevArtwork = () => {
    if (selectedIndex > 0) {
      openArtwork(currentSeries.artworks[selectedIndex - 1].id)
    }
  }

  const nextArtwork = () => {
    if (selectedIndex < currentSeries.artworks.length - 1) {
      openArtwork(currentSeries.artworks[selectedIndex + 1].id)
    }
  }

  if (selectedArtwork) {
    return (
      <div className="h-full pt-14 lg:pt-0">
        <ArtworkDetail
          artwork={selectedArtwork}
          series={currentSeries}
          onClose={closeArtwork}
          onPrev={prevArtwork}
          onNext={nextArtwork}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < currentSeries.artworks.length - 1}
        />
      </div>
    )
  }

  return (
    <div className="pt-20 lg:pt-10 pb-16 px-6 lg:px-10">
      {/* Series header */}
      <div className="mb-16">
        {/* H1 — Playfair Display 32px Bold */}
        <h1 className="font-heading font-bold text-ds-h1 leading-tight text-black">
          {currentSeries.title}
        </h1>
        {/* Caption Regular — Montserrat 12px 400 */}
        <p className="font-sans font-normal text-ds-caption text-ds-grey mt-1">
          {currentSeries.subtitle}
        </p>
      </div>

      {/* Artwork grid — horizontal scroll row */}
      <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-4">
        {currentSeries.artworks.map((artwork) => (
          <button
            key={artwork.id}
            onClick={() => openArtwork(artwork.id)}
            className="flex-shrink-0 overflow-hidden hover:opacity-85 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            aria-label={`View ${artwork.title}`}
            style={{
              height: '260px',
              width: `calc(260px * (${artwork.aspectRatio.replace('/', ' / ')}))`,
              aspectRatio: artwork.aspectRatio,
            }}
          >
            <div
              className="w-full h-full"
              style={{ background: artwork.gradient }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ArtworkPage() {
  return (
    <Suspense fallback={<div className="p-10 font-sans text-ds-caption text-ds-grey">Loading…</div>}>
      <ArtworkPageContent />
    </Suspense>
  )
}
