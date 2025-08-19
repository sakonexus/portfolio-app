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
    title: 'Lifecycle Marketing Experience',
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
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-between items-center h-10/12 w-full fixed py-24">
        {renderSidebarLinks}
      </div>
    </div>
  );
};

export default SidebarItems;
