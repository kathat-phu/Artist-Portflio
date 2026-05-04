export type Artwork = {
  id: string
  title: string
  year: number
  medium: string
  dimensions: string
  gradient: string
  aspectRatio: string
}

export type ArtworkSeries = {
  id: string
  title: string
  years: string
  subtitle: string
  artworks: Artwork[]
}

export const artworkSeries: ArtworkSeries[] = [
  {
    id: 'dissolving-blur',
    title: 'Dissolving & Blur',
    years: '2025-2026',
    subtitle: 'Body',
    artworks: [
      {
        id: 'db-1',
        title: 'Untitled I',
        year: 2025,
        medium: 'Oil on canvas',
        dimensions: '140 x 120 cm',
        gradient:
          'linear-gradient(160deg, #f0c4d4 0%, #c8e6c2 35%, #f9e4a0 65%, #e8c8d8 100%)',
        aspectRatio: '1/1',
      },
      {
        id: 'db-2',
        title: 'Untitled II',
        year: 2025,
        medium: 'Oil on canvas',
        dimensions: '100 x 90 cm',
        gradient:
          'linear-gradient(145deg, #f0ebe0 0%, #e4d8c0 40%, #d8c8a8 70%, #e8dcc8 100%)',
        aspectRatio: '11/10',
      },
      {
        id: 'db-3',
        title: 'Untitled III',
        year: 2026,
        medium: 'Oil on canvas',
        dimensions: '120 x 150 cm',
        gradient:
          'linear-gradient(180deg, #1a2a4a 0%, #1e3a5f 25%, #0e4a6a 50%, #1a3a50 75%, #0a1a30 100%)',
        aspectRatio: '4/5',
      },
      {
        id: 'db-4',
        title: 'Untitled IV',
        year: 2026,
        medium: 'Oil on canvas',
        dimensions: '110 x 140 cm',
        gradient:
          'linear-gradient(135deg, #e05010 0%, #f07020 20%, #1050a0 50%, #c01020 75%, #1848a0 100%)',
        aspectRatio: '4/5',
      },
      {
        id: 'db-5',
        title: 'Untitled V',
        year: 2026,
        medium: 'Oil on canvas',
        dimensions: '90 x 100 cm',
        gradient:
          'linear-gradient(160deg, #050505 0%, #181818 40%, #0a0a0a 70%, #202020 100%)',
        aspectRatio: '9/10',
      },
    ],
  },
  {
    id: 'tuning-matter',
    title: 'Tuning Into Matter',
    years: '2022-2024',
    subtitle: 'Series',
    artworks: [
      {
        id: 'tm-1',
        title: 'Matter I',
        year: 2022,
        medium: 'Acrylic on canvas',
        dimensions: '100 x 100 cm',
        gradient:
          'linear-gradient(135deg, #9e7e6a 0%, #c0a080 40%, #d8c0a8 100%)',
        aspectRatio: '1/1',
      },
      {
        id: 'tm-2',
        title: 'Matter II',
        year: 2022,
        medium: 'Acrylic on canvas',
        dimensions: '130 x 100 cm',
        gradient:
          'linear-gradient(160deg, #607080 0%, #8090a0 45%, #b0c0cc 100%)',
        aspectRatio: '13/10',
      },
      {
        id: 'tm-3',
        title: 'Matter III',
        year: 2023,
        medium: 'Acrylic on canvas',
        dimensions: '80 x 110 cm',
        gradient:
          'linear-gradient(180deg, #4a148c 0%, #7b1fa2 45%, #ce93d8 100%)',
        aspectRatio: '8/11',
      },
      {
        id: 'tm-4',
        title: 'Matter IV',
        year: 2024,
        medium: 'Mixed media on canvas',
        dimensions: '150 x 120 cm',
        gradient:
          'linear-gradient(135deg, #1b5e20 0%, #2e7d32 40%, #81c784 100%)',
        aspectRatio: '5/4',
      },
    ],
  },
  {
    id: 'exquisite-urban',
    title: 'Exquisite Urban Chaos',
    years: '2020-2021',
    subtitle: 'Urban Series',
    artworks: [
      {
        id: 'eu-1',
        title: 'Urban I',
        year: 2020,
        medium: 'Oil on canvas',
        dimensions: '130 x 100 cm',
        gradient:
          'linear-gradient(135deg, #37474f 0%, #546e7a 45%, #90a4ae 100%)',
        aspectRatio: '13/10',
      },
      {
        id: 'eu-2',
        title: 'Urban II',
        year: 2020,
        medium: 'Oil on canvas',
        dimensions: '100 x 130 cm',
        gradient:
          'linear-gradient(180deg, #bf360c 0%, #e64a19 30%, #ff8a65 65%, #1a1a1a 100%)',
        aspectRatio: '10/13',
      },
      {
        id: 'eu-3',
        title: 'Urban III',
        year: 2021,
        medium: 'Oil and acrylic on canvas',
        dimensions: '120 x 90 cm',
        gradient:
          'linear-gradient(135deg, #e65100 0%, #ef6c00 40%, #ffa000 100%)',
        aspectRatio: '4/3',
      },
      {
        id: 'eu-4',
        title: 'Urban IV',
        year: 2021,
        medium: 'Oil on canvas',
        dimensions: '80 x 100 cm',
        gradient:
          'linear-gradient(180deg, #1a237e 0%, #283593 35%, #9fa8da 75%, #e8eaf6 100%)',
        aspectRatio: '4/5',
      },
    ],
  },
]
