import * as React from 'react';
import {createContext} from "react";

export default createContext(({
    authData: {},
    setAuthData: value => {}
    })
);