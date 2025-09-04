export interface CelebrateSectionProps {
    backgroundImagePath?: string;
    textImagePath?: string;
    className?: string;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    expanded: boolean;
}