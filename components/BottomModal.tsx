import { useTheme } from '@/hooks/useTheme'
import React, { ReactNode } from 'react'
import { ScrollView, View,Text } from 'react-native'
import { useSettings } from '@/hooks/useSettings'
import BottomSheet from 'react-native-simple-bottom-sheet';
import SettingsModal from './SettingsModal';


export const BottomModal: React.FC = ({  }) => {
	const { theme } = useTheme()
	const { closeSettings } = useSettings()
	return (
		    
			<BottomSheet isOpen={true} onClose={()=>{closeSettings()}}   onOpen={() => null} >
        			{(onScrollEndDrag:any) => (
          		<ScrollView onScrollEndDrag={onScrollEndDrag} contentContainerStyle={{paddingBottom:10}}>
            {[...Array(1)].map((_, index) => (
              <SettingsModal key={index}/>
            ))}
          </ScrollView>
        )}
        </BottomSheet>
      
			
    )
}
