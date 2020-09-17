import { AxiosInstance } from "axios";
import React, { ReactNode } from "react";

//? undefined default valueor set value
// export type ContextValue = undefined | AxiosInstance;

export type ProviderValue = AxiosInstance; // since you know this is what the provider will be passing

export type DefaultValue = undefined;

export type ContextValue = DefaultValue | ProviderValue;

const AxiosContext = React.createContext<ContextValue>(undefined);
// const AxiosContext = React.createContext(undefined);

export type Props = {
	children: ReactNode;
	axiosInstance: AxiosInstance;
};

function AxiosProvider(props: Props) {
	const { children, axiosInstance } = props;

	return (
		<AxiosContext.Provider value={axiosInstance}>
			{children}
		</AxiosContext.Provider>
	);
}

const useAxios = () => React.useContext(AxiosContext);

export { AxiosProvider, useAxios };
