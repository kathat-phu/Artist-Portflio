export default function BiographyPage() {
  return (
    <div className="pt-20 lg:pt-10 pb-16 px-6 lg:px-10 max-w-3xl">
      {/* H1 — Playfair Display 32px Bold */}
      <h1 className="font-heading font-bold text-ds-h1 leading-tight text-black mb-1">
        Kathat Phutsorn
      </h1>
      {/* Caption Regular — Montserrat 12px 400 */}
      <p className="font-sans font-normal text-ds-caption text-ds-grey mb-10">
        Born in 1997, Lives and works in Bangkok, Thailand
      </p>

      {/* Education */}
      <section className="mb-10">
        {/* H2 — Playfair Display 24px Bold */}
        <h2 className="font-heading font-bold text-ds-h2 text-black mb-4">
          Education
        </h2>

        <div className="space-y-4">
          <div>
            {/* Body Regular — Montserrat 16px 400 */}
            <p className="font-sans font-normal text-ds-body text-black leading-relaxed">
              Master of Fine Arts Program in Visual Arts
              <br />
              ,King Mongkut&apos;s Institute of Technology Ladkrabang
            </p>
            {/* Body Bold — Montserrat 16px 700 */}
            <p className="font-sans font-bold text-ds-body text-black mt-0.5">
              2025 - Current
            </p>
          </div>

          <div>
            <p className="font-sans font-normal text-ds-body text-black leading-relaxed">
              Bachelor of Education Program in Art Education
              <br />
              ,Chulalongkorn University
            </p>
            <p className="font-sans font-bold text-ds-body text-black mt-0.5">
              2016 - 2021
            </p>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section>
        {/* H2 — Playfair Display 24px Bold */}
        <h2 className="font-heading font-bold text-ds-h2 text-black mb-4">
          Exhibitions
        </h2>

        <div className="space-y-5">
          <div>
            {/* Body Bold — Montserrat 16px 700 */}
            <p className="font-sans font-bold text-ds-body text-black">
              2020 | &quot;Reflection: Society &amp; Identity&quot; (Online Exhibition)
            </p>
            {/* Body Regular — Montserrat 16px 400 */}
            <p className="font-sans font-normal text-ds-body text-ds-grey leading-relaxed mt-0.5">
              Supervised Project Exhibition by Art Education students, Faculty of
              Education, Chulalongkorn University.
            </p>
          </div>

          <div>
            <p className="font-sans font-bold text-ds-body text-black">
              2019 | &quot;Printset&quot; Art Exhibition
            </p>
            <p className="font-sans font-normal text-ds-body text-ds-grey leading-relaxed mt-0.5">
              Group exhibition of Printmaking works by 3rd-year Art Education
              students, Faculty of Education, Chulalongkorn University.
              <br />
              Venue: Chamchuri Art Gallery, Bangkok, Thailand.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
