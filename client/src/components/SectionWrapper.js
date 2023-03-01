import { Link } from "react-router-dom";

const SectionWrapper = ({ children, title, seeAllLink, breadcrumb }) => (
  <section className="first:pt-0 flex flex-col justify-center items-center">
    <div className="w-full max-w-[1300px] mx-0 my-auto relative px-8 py-6">
      <div className="flex justify-between items-stretch mb-10">
        <h2 className="flex m-0 text-2xl">
          {breadcrumb && (
            <span className="flex text-primary_text/50 after:block after:mx-0 after:my-4 items-center text-2xl">
              <Link
                to="/"
                className="hover:text-primary_text font-medium font-montserrat ease-in-out duration-200"
              >
                Profile
              </Link>
              <span className="mx-3">/</span>
            </span>
          )}
          {title && (
            <>
              {seeAllLink ? (
                <Link
                  to={seeAllLink}
                  className="text-primary_text font-montserrat text-2xl font-bold hover:underline hover:underline-offset-2"
                >
                  {title}
                </Link>
              ) : (
                <span className="text-primary_text font-montserrat text-2xl font-semibold">
                  {title}
                </span>
              )}
            </>
          )}
        </h2>
        {seeAllLink && (
          <Link
            to={seeAllLink}
            className="flex items-end uppercase text-light_gray text-sm font-montserrat font-semibold pb-1 hover:underline hover:underline-offset-2"
          >
            Show All
          </Link>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
