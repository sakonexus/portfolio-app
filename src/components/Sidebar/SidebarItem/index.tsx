import Button from '../Button';

const SidebarLinks = [
  {
    title: 'About Me',
    elementId: 'am',
    buttonId: 'about',
  },
  {
    title: 'Web Dev Experience',
    elementId: 'wde',
    buttonId: 'WDexperience',
  },
  {
    title: 'Direct Marketing Experience',
    elementId: 'dme',
    buttonId: 'DMexperience',
  },
  {
    title: 'Technologies I Know',
    elementId: 'tik',
    buttonId: 'tech',
  },
  {
    title: 'Playground',
    elementId: 'pg',
    buttonId: 'playground',
  },
  {
    title: 'Contact Me',
    elementId: 'cm',
    buttonId: 'contact',
  },
];

const SidebarItems = () => {
  const renderSidebarLinks = SidebarLinks.map((item, index) => {
    return index == 0 ? (
      <Button
        containerClasses="pt-8 pb-16"
        title={`${item.title}`}
        elementId={`${item.elementId}`}
        buttonId={item.buttonId}
        key={index}
      />
    ) : (
      <Button
        containerClasses="py-16"
        title={`${item.title}`}
        elementId={`${item.elementId}`}
        buttonId={item.buttonId}
        key={index}
      />
    );
  });

  return (
    <div className="p-3">
      <div className="flex flex-col">{renderSidebarLinks}</div>
    </div>
  );
};

export default SidebarItems;
