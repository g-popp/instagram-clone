import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not found - Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-center text-2xl mt-6 mb-8">Sorry, this page isn't available</h2>
        <p className="text-center">
          The link you followed may be broken, or the page nay have been removed.
          <Link to={ROUTES.LOGIN} className="text-blue-medium">
            {' '}
            Go back to Instagram
          </Link>
        </p>
      </div>
    </div>
  );
}
