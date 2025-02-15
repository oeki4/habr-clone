import { Page } from "widgets/Page/Page";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router";
import { Text } from "shared/ui/Text/Text";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <Text text={"Not found"} />;
  }

  return (
    <Page>
      <VStack gap={"16"} max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
