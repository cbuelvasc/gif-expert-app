import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <div className="group relative shadow-lg">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
        <img
          src={url}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 pl-2 ">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
        </div>
      </div>
      <div className="mt-4 flex justify-between"></div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
