import { ThemeProvider } from '@/ctx/themeContext'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
// import { StatusBar } from 'react-native'
import 'react-native-reanimated'
import { SettingsProvider } from '@/ctx/settingsContext'
import { BookProvider } from '@/ctx/booksContext'
import { FontProvider } from '@/ctx/fontsContext'


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<ThemeProvider>
			
			<FontProvider>
			<BookProvider>
			<SettingsProvider>
				
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name='+not-found' />
					{/* <Stack.Screen name='index' options={{back}} /> */}
				</Stack>
			</SettingsProvider>
			</BookProvider>
			</FontProvider>
			
		</ThemeProvider>
	)
}

