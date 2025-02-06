import {memo} from "react";
import {Flex, FlexProps} from "shared/ui/Stack/Flex/Flex";

type HStackProps = Omit<FlexProps, 'direction'>

export const VStack = memo((props: HStackProps) => {
	const {align = 'start'} = props;
	return (
		<Flex {...props} direction={'column'} align={align}/>
	);
});