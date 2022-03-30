import * as React from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';

export interface ILanguageToggleProps extends React.HTMLAttributes<HTMLButtonElement> {

}

export interface ILanguageToggleMenuProps {
	onClick: (event: MenuInfo) => void;
}
