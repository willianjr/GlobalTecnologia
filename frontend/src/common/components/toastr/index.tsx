import React from 'react';
import ReduxToastr from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.min.css'


export default (props:any) => (
    <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        progressBar
        transitionIn='fadeIn'
        transitionOut='fadeOut'

    />
)
