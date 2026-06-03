
import HeroNorm from "@/components/HeroNormal";
import BaseLayout from "@/components/layouts/BaseLayout";
import Button, { ButtonStyle } from "@/components/ui/Button";

export default function DownloadPage() {
    return (
        <BaseLayout>
            <HeroNorm text="Downloads"/>
            <span className="text-lg">OneShot 3D can be downloaded here:</span>
            <div>
                <Button style={ButtonStyle.Seconday}>
                    <span>Download on Itch</span>
                </Button>
            </div>
        </BaseLayout>
    )
}