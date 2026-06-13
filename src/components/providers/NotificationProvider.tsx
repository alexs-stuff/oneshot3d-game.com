"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

type NotificationType = "info" | "success" | "error";

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

interface NotifyOptions {
  message: string;
  type?: NotificationType;
  duration?: number;
}

interface NotificationContextValue {
  notify: (opts: NotifyOptions) => number;
  remove: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextValue | null>(
  null,
);

export function useNotify() {
  const ctx = useContext(NotificationContext);
  if (!ctx)
    throw new Error("useNotify must be used inside <NotificationProvider>");
  return ctx;
}

export default function NotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [notes, setNotes] = useState<Notification[]>([]);
  const idRef = useRef(0);

  const remove = useCallback((id: number) => {
    setNotes((n) => n.filter((x) => x.id !== id));
  }, []);

  const notify = useCallback(
    ({ message, type = "info", duration = 4000 }: NotifyOptions) => {
      const id = idRef.current++;
      setNotes((n) => [...n, { id, message, type }]);
      if (duration) setTimeout(() => remove(id), duration);
      return id;
    },
    [remove],
  );

  return (
    <NotificationContext.Provider value={{ notify, remove }}>
      {children}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
        {notes.map((n) => (
          <div
            key={n.id}
            className={`text-primary-fg bg-primary-bg border-primary-bg-outline backdrop-blur-primary-scaled min-w-[240px] rounded-(--rounded-secondary) border`}>
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}
