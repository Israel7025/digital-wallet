import { Redirect } from "expo-router";
import {Stack} from "expo-router";

export default function Layout() {
    const { isSignedIn } = false

    if (!isSignedIn) return <Redirect href={"/sign-in"} />

    return <Stack screenOptions={{headerShown: false}} />
}