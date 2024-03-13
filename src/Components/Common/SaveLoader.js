import React from 'react';
import { Spinner } from 'reactstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SaveLoader = (props) => {
    return (
        <React.Fragment>
         <span className="d-flex align-items-center">
          <Spinner size="sm" type="grow" className="flex-shrink-0"> Loading... </Spinner>
           <span className="flex-grow-1 ms-2">Saving... </span>
           </span>
        </React.Fragment>
    );
};

export default SaveLoader;
