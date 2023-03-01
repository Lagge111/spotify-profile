import { Link } from "react-router-dom";

const SectionWrapper = ({ children, title, seeAllLink, breadcrumb }) => (
  <section className="first:pt-0">
    <div className="w-full max-w-[1300px] mx-0 my-auto relative px-8 py-6">
      <div className="flex justify-between items-stretch mb-10">
        <h2 className="flex m-0 text-2xl">
          {breadcrumb && (
            <span className="flex text-primary_text/50 hover:text-primary_text after:block after:mx-0 after:my-4">
              <Link to="/">Profile</Link>
            </span>
          )}
          {title && (
            <>
              {seeAllLink ? (
                <Link
                  to={seeAllLink}
                  className="text-primary_text font-montserrat text-2xl font-bold"
                >
                  {title}
                </Link>
              ) : (
                <span className="text-primary_text font-montserrat text-lg font-semibold">
                  {title}
                </span>
              )}
            </>
          )}
        </h2>
        {seeAllLink && (
          <Link
            to={seeAllLink}
            className="flex items-end uppercase text-white text-sm font-semibold pb-1"
          >
            See All
          </Link>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
