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
    title: 'Contact Me',
    elementId: 'cm',
    buttonId: 'contact',
  },
];

const SidebarItems = () => {
  const renderSidebarLinks = SidebarLinks.map((item, index) => {
    return (
      <Button
        containerClasses={``}
        title={`${item.title}`}
        elementId={`${item.elementId}`}
        buttonId={item.buttonId}
        key={index}
      />
    );
  });

  return (
    <div className="flex flex-col justify-between items-center h-full w-full fixed py-24">{renderSidebarLinks}</div>
  );
};

export default SidebarItems;
