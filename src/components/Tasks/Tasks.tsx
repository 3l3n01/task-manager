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
import { IconGripVertical } from "@tabler/icons-react";
import cx from "clsx";
import { Text, Group, Box } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import classes from "./Tasks.module.css";

const data: {
  id: number;
  title: string;
  category: string;
  timeWorked: number;
}[] = [
  { id: 1, title: "Task 1", category: "Work", timeWorked: 5 },
  { id: 2, title: "Task 2", category: "Personal", timeWorked: 2 },
  { id: 3, title: "Task 3", category: "Hobby", timeWorked: 3 },
  { id: 4, title: "Task 4", category: "Work", timeWorked: 4 },
  { id: 5, title: "Task 5", category: "Personal", timeWorked: 1 },
  { id: 6, title: "Task 6", category: "Hobby", timeWorked: 6 },
  { id: 7, title: "Task 7", category: "Work", timeWorked: 2 },
  { id: 8, title: "Task 8", category: "Personal", timeWorked: 3 },
  { id: 9, title: "Task 9", category: "Hobby", timeWorked: 4 },
  { id: 10, title: "Task 10", category: "Work", timeWorked: 5 },
];

interface ItemProps {
  item: (typeof data)[number];
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
    <Box
      className={cx(classes.item, { [classes.itemDragging]: isDragging })}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Box className={classes.dragHandle} {...listeners}>
        <IconGripVertical size={18} stroke={1.5} />
      </Box>
      <Group justify="space-between" gap="xs" w={"100%"}>
        <Box>
          <Text>{item.title}</Text>
          <Text c="dimmed" size="sm">
            Categoria: {item.category} • Tiempo: {item.timeWorked}
          </Text>
        </Box>
        <Box>a</Box>
      </Group>
    </Box>
  );
}

export function Tasks() {
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
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={state.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          {state.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
}
