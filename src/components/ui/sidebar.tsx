'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { PanelLeft } from 'lucide-react';

import { useMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH_DEFAULT = "14rem"; // Default width for larger screens
const SIDEBAR_WIDTH_MOBILE = "16rem"; // Width for mobile off-canvas
const SIDEBAR_WIDTH_COLLAPSED = "3.5rem"; // Width when collapsed on desktop

type SidebarContext = {
  isMobile: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  toggle: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }
  return context;
}

const SidebarProvider = ({
  children,
  defaultCollapsed = false,
}: {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}) => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  React.useEffect(() => {
    // On mobile, the sidebar is always an off-canvas menu
    if (isMobile) {
      setIsCollapsed(false);
    }
  }, [isMobile]);
  
  const toggle = React.useCallback(() => {
    if (isMobile) {
      setIsOpen(prev => !prev);
    } else {
      setIsCollapsed(prev => !prev);
    }
  }, [isMobile]);

  const contextValue = React.useMemo(
    () => ({
      isMobile,
      isOpen,
      setIsOpen,
      isCollapsed,
      setIsCollapsed,
      toggle,
    }),
    [isMobile, isOpen, setIsOpen, isCollapsed, setIsCollapsed, toggle]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
            style={
              {
                '--sidebar-width': SIDEBAR_WIDTH_DEFAULT,
                '--sidebar-width-collapsed': SIDEBAR_WIDTH_COLLAPSED,
              } as React.CSSProperties
            }
          >
            {children}
          </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
};


const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const { isMobile, isOpen, setIsOpen, isCollapsed } = useSidebar();
  
    if (isMobile) {
      return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="left"
            className={cn("w-[--sidebar-width-mobile] bg-background p-0", className)}
            style={{ '--sidebar-width-mobile': SIDEBAR_WIDTH_MOBILE } as React.CSSProperties}
            {...props}
          >
             <div ref={ref} className="flex h-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }
  
    return (
      <div
        ref={ref}
        data-collapsed={isCollapsed}
        className={cn("hidden md:flex flex-col h-screen border-r bg-background transition-[width] duration-300", 
            isCollapsed ? "w-[--sidebar-width-collapsed]" : "w-[--sidebar-width]",
            className
        )}
        {...props}
      >
        {children}
      </div>
    );
  });
Sidebar.displayName = 'Sidebar';


const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
    const { toggle } = useSidebar();
    return (
        <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn("h-8 w-8", className)}
        onClick={toggle}
        {...props}
        >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
        </Button>
    );
});
SidebarTrigger.displayName = 'SidebarTrigger';

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { isCollapsed } = useSidebar();
    return (
        <div
        ref={ref}
        data-collapsed={isCollapsed}
        className={cn(
            'flex items-center p-3 transition-all duration-300',
            isCollapsed ? 'justify-center' : 'justify-between',
            className
        )}
        {...props}
        />
    );
});
SidebarHeader.displayName = 'SidebarHeader';

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex-1 overflow-y-auto overflow-x-hidden p-2', className)}
      {...props}
    />
  );
});
SidebarContent.displayName = 'SidebarContent';

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mt-auto border-t p-2', className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = 'SidebarFooter';

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-col gap-1', className)}
    {...props}
  />
));
SidebarMenu.displayName = 'SidebarMenu';


const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('relative', className)} {...props} />
));
SidebarMenuItem.displayName = 'SidebarMenuItem';

const sidebarMenuButtonVariants = cva(
    "flex w-full items-center gap-3 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-primary-focus transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-accent data-[active=true]:font-medium data-[active=true]:text-accent-foreground",
    {
      variants: {
        isCollapsed: {
          true: "justify-center [&>span:last-child]:hidden",
          false: "[&>span:last-child]:block",
        }
      },
    }
  );

  const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string;
  }
>(({ asChild = false, isActive = false, tooltip, className, children, ...props }, ref) => {
  const { isCollapsed, isMobile } = useSidebar();
  const Comp = asChild ? Slot : 'button';

  const button = (
    <Comp
      ref={ref}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ isCollapsed }), className)}
      {...props}
    >
      {children}
    </Comp>
  );

  if (isCollapsed && !isMobile && tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="right" align="center">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    );
  }

  return button;
});
SidebarMenuButton.displayName = 'SidebarMenuButton';


export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
};
