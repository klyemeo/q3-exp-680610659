// export function StudentInfo() {
//   return (
//     // Use Drawer component to display student information
//     <div className="flex-1 p-4">
//       <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
//         Jarkrasri Thonglueng
//       </button>
//     </div>
//   );
// }


import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function StudentInfo() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button className="border border-blue-300 rounded-md px-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" >Jarkrasri Thonglueng</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <div  className="flex shrink-0 flex-col gap-0.5 p-4 pb-0 group-data-[swipe-axis=y]/drawer-popup:text-center md:gap-0.5 md:text-left">
          <DrawerTitle className={"font-heading text-foreground text-xl font-semibold"}>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription className={"text-sm text-balance text-muted-foreground"}>Student information</DrawerDescription>
          </div>
        </DrawerHeader>
{/* --------------------    head    ------------ */}
<div className={"flex-1 p-4"}>

  <div className="w-full h-86 overflow-hidden rounded-lg border border-border bg-muted">
            {/* <div className="size-full rounded-2xl bg-muted" /> */}
            <img 
                src="/src/assets/IMG_4005.jpg" 
                alt="Example"
                className="w-full h-full object-cover" 
              />
          </div>
          <br></br>
          <div className="font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm" >Jarkrasri Thonglueng</div>
          <div className="text-sm text-muted-foreground">นักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</div>
          <br></br>
          <div data-slot="card-content" className="px-(--card-spacing)">
            <p className="my-2">
              <span data-slot="badge" data-variant="default" className="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3! bg-primary text-primary-foreground [a]:hover:bg-primary/80">
              Hobbies</span> ฟังเพลง, เล่นบาส, หุ่นยนต์</p>
              <p className="my-2">
                <span data-slot="badge" data-variant="default" className="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3! bg-primary text-primary-foreground [a]:hover:bg-primary/80">
                Email</span> Jarkrasri_t@cmu.ac.th</p>
                <p className="my-2">
                  <span data-slot="badge" data-variant="default" className="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3! bg-primary text-primary-foreground [a]:hover:bg-primary/80">
                  Social</span> IG: kk.lyee_</p>
                  </div>
          <br></br>
          <div className="flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)">รหัสนักศึกษา: 680610659</div>
          <br></br>
                  <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
  </div>

      </DrawerContent>

    </Drawer>
  )
}
