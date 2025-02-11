
export interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

interface DashboardSidebarProps {
  title: string;
  menuItems: MenuItem[];
  activeView: string;
  onViewChange: (view: string) => void;
  titleBgColor?: string;
}

export default function DashboardSidebar({
  title,
  menuItems,
  activeView,
  onViewChange,
  titleBgColor = 'bg-secondaryColor'
}: DashboardSidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen">
      <div className={`p-4 ${titleBgColor} text-white font-semibold text-[1]`}>
        {title}
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                  activeView === item.id
                    ? 'bg-gray-100 text-secondaryColor'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <img 
                  src={item.icon} 
                  alt={item.label}
                  className={`w-5 h-5 transition-transform duration-200 ${
                    activeView === item.id ? 'scale-110' : 'hover:scale-110'
                  }`}
                />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <button
          onClick={() => onViewChange('settings')}
          className="w-full flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md transition-colors hover:text-secondaryColor"
        >
          <img 
            src="/public/imageDashboard/setting.svg" 
            alt="Settings"
            className="w-5 h-5 transition-transform duration-200 hover:scale-110"
          />
          <span>Paramètres</span>
        </button>
      </div>
    </aside>
  );
}