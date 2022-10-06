import React, { FC } from 'react';
import { IExampleProps } from './interface';
import styles from './index.module.scss';
import { useStore } from '@context/store';
import { observer } from 'mobx-react';
import { EThemes } from '@stores/theme/interface';
import { useTranslation } from 'react-i18next';

const Example: FC<IExampleProps> = ({ label }) => {
	const { themeStore } = useStore();
	const { t } = useTranslation();

	const handleToggleThemeClick = () => {
		themeStore.setValue(
			themeStore.value == EThemes.LIGHT ? EThemes.DARK : EThemes.LIGHT
		);
	};

	return (
		<div className={styles.example}>
			<h1 data-testid="title">
				{t('common:components.example.title', 'Example')}: {label}
			</h1>
			<p data-testid="subtitle">
				{t('common:components.example.storeTheme.title', 'Store theme')}:{' '}
				{t(`common:theme.options.${themeStore.value}`, themeStore.value)}
			</p>
			<button
				data-testid="button"
				onClick={handleToggleThemeClick}
			>
				{t('common:components.example.toggleThemeBtn.text', 'Toggle theme')}
			</button>
		</div>
	);
};

export default observer(Example);
