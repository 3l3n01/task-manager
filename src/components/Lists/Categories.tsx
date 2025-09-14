import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import cx from "clsx";
import { Text } from "@mantine/core";
import { useListState } from "@mantine/hooks";

// componentes
import { IconSelect } from "../IconSelect/IconSelect";

// Import Data
import { categories as data } from "../../Data/Categories";

// Styles
import classes from "./Categories.module.css";

interface ItemProps {
  item: (typeof data)[number];
  index: number; // kept if needed elsewhere
}

function SortableItem({ item }: ItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cx(classes.item, { [classes.itemDragging]: isDragging })}
      {...attributes}
      {...listeners}
    >
      <Text className={classes.symbol}>
        <IconSelect icon={item.icon} size={35} stroke={1.5} />
      </Text>
      <div>
        <Text>{item.title}</Text>
        <Text c="dimmed" size="sm">
          {item.description}
        </Text>
      </div>
    </div>
  );
}

export function CategoryList() {
  const [state, handlers] = useListState(data);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }
    const oldIndex = state.findIndex((i) => i.id === active.id);
    const newIndex = state.findIndex((i) => i.id === over.id);
    handlers.setState(arrayMove(state, oldIndex, newIndex));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={state.map((i) => i.id)}
        strategy={verticalListSortingStrategy}
      >
        {state.map((item, index) => (
          <SortableItem key={item.id} item={item} index={index} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
